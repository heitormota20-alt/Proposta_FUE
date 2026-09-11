import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

const MAX_COLORS = 8

const hexToRGB = (hex) => {
  const c = hex.replace('#', '').padEnd(6, '0')
  const r = parseInt(c.slice(0, 2), 16) / 255
  const g = parseInt(c.slice(2, 4), 16) / 255
  const b = parseInt(c.slice(4, 6), 16) / 255
  return [r, g, b]
}

const prepStops = (stops) => {
  const base = (stops && stops.length ? stops : ['#FF9FFC', '#5227FF']).slice(0, MAX_COLORS)
  if (base.length === 1) base.push(base[0])
  while (base.length < MAX_COLORS) base.push(base[base.length - 1])
  const arr = []
  for (let i = 0; i < MAX_COLORS; i++) arr.push(hexToRGB(base[i]))
  const count = Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2))
  return { arr, count }
}

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform float uAngle;
uniform float uNoise;
uniform float uBlindCount;
uniform float uSpotlightRadius;
uniform float uSpotlightSoftness;
uniform float uSpotlightOpacity;
uniform float uMirror;
uniform float uDistort;
uniform float uShineFlip;
uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;
uniform float uLightMode;

varying vec2 vUv;

float rand(vec2 co){
  return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rotate2D(vec2 p, float a){
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

vec3 getGradientColor(float t){
  float tt = clamp(t, 0.0, 1.0);
  int count = uColorCount;
  if (count < 2) count = 2;
  float scaled = tt * float(count - 1);
  float seg = floor(scaled);
  float f = fract(scaled);

  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7;
  if (count > 6) return uColor6;
  if (count > 5) return uColor5;
  if (count > 4) return uColor4;
  if (count > 3) return uColor3;
  if (count > 2) return uColor2;
  return uColor1;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv0 = fragCoord.xy / iResolution.xy;

    float aspect = iResolution.x / iResolution.y;
    vec2 p = uv0 * 2.0 - 1.0;
    p.x *= aspect;
    vec2 pr = rotate2D(p, uAngle);
    pr.x /= aspect;
    vec2 uv = pr * 0.5 + 0.5;

    vec2 uvMod = uv;
    if (uDistort > 0.0) {
      float a = uvMod.y * 6.0;
      float b = uvMod.x * 6.0;
      float w = 0.01 * uDistort;
      uvMod.x += sin(a) * w;
      uvMod.y += cos(b) * w;
    }
    float t = uvMod.x;
    if (uMirror > 0.5) {
      t = 1.0 - abs(1.0 - 2.0 * fract(t));
    }
    vec3 base = getGradientColor(t);

    vec2 offset = vec2(iMouse.x/iResolution.x, iMouse.y/iResolution.y);
  float d = length(uv0 - offset);
  float r = max(uSpotlightRadius, 1e-4);
  float dn = d / r;
  float spot = (1.0 - 2.0 * pow(dn, uSpotlightSoftness)) * uSpotlightOpacity;
  vec3 cir = vec3(spot);
  float blindCount = max(uBlindCount, 1.0);
  float stripePhase = uvMod.x * blindCount;
  float stripe = fract(stripePhase);
  float stripeAA = clamp(blindCount * 1.25 / min(iResolution.x, iResolution.y), 0.001, 0.12);
  float edgeDistance = min(stripe, 1.0 - stripe);
  float edgeBlend = 1.0 - smoothstep(0.0, stripeAA, edgeDistance);
  stripe = mix(stripe, 0.5, edgeBlend);
  if (uShineFlip > 0.5) stripe = 1.0 - stripe;
    vec3 ran = vec3(stripe);
    vec3 revealSignal = cir + base - ran;

    vec3 col;
    if (uLightMode > 0.5) {
      float peak = max(base.r, max(base.g, base.b));
      vec3 pigment = base / max(peak, 0.0001);
      float neutral = min(pigment.r, min(pigment.g, pigment.b));
      pigment = max(pigment - vec3(neutral * 0.72), vec3(0.0));
      pigment /= max(max(pigment.r, max(pigment.g, pigment.b)), 0.0001);
        pigment = mix(pigment, pigment * pigment, 0.12) * 0.72;
        vec3 revealed = clamp(revealSignal, 0.0, 1.0);
        float coverage = max(revealed.r, max(revealed.g, revealed.b));
        col = mix(vec3(1.0), pigment, coverage);
        float grain = max(rand(gl_FragCoord.xy + iTime) - 0.5, 0.0);
        float grainAmount = grain * uNoise * mix(0.12, 0.18, coverage);
        col = clamp(col - vec3(grainAmount), 0.0, 1.0);
    } else {
        col = revealSignal;
      col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;
    }

    fragColor = vec4(col, 1.0);
}

void main() {
    vec4 color;
    mainImage(color, vUv * iResolution.xy);
    gl_FragColor = color;
}
`

export default function GradientBlinds({
  className = '',
  dpr,
  paused = false,
  gradientColors,
  angle = 0,
  noise = 0.3,
  blindCount = 16,
  blindMinWidth = 60,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  distortAmount = 0,
  shineDirection = 'left',
  mixBlendMode = 'lighten',
  lightMode = false,
  spotlightOrigin = [0.82, 0.82],
}) {
  const containerRef = useRef(null)
  const ctxRef = useRef(null)
  const mouseTargetRef = useRef([0, 0])
  const lastTimeRef = useRef(0)
  const firstResizeRef = useRef(true)
  const propsRef = useRef(null)

  propsRef.current = {
    dpr,
    paused,
    gradientColors,
    angle,
    noise,
    blindCount,
    blindMinWidth,
    mirrorGradient,
    spotlightRadius,
    spotlightSoftness,
    spotlightOpacity,
    distortAmount,
    shineDirection,
    lightMode,
    spotlightOrigin,
  }

  // Aplica os valores mais recentes das props aos uniforms já existentes,
  // sem recriar o contexto WebGL.
  const applyUniforms = (uniforms) => {
    const p = propsRef.current
    const { arr: colorArr, count: colorCount } = prepStops(p.gradientColors)
    uniforms.uAngle.value = (p.angle * Math.PI) / 180
    uniforms.uNoise.value = p.noise
    uniforms.uSpotlightRadius.value = p.spotlightRadius
    uniforms.uSpotlightSoftness.value = p.spotlightSoftness
    uniforms.uSpotlightOpacity.value = p.spotlightOpacity
    uniforms.uMirror.value = p.mirrorGradient ? 1 : 0
    uniforms.uDistort.value = p.distortAmount
    uniforms.uShineFlip.value = p.shineDirection === 'right' ? 1 : 0
    uniforms.uColor0.value = colorArr[0]
    uniforms.uColor1.value = colorArr[1]
    uniforms.uColor2.value = colorArr[2]
    uniforms.uColor3.value = colorArr[3]
    uniforms.uColor4.value = colorArr[4]
    uniforms.uColor5.value = colorArr[5]
    uniforms.uColor6.value = colorArr[6]
    uniforms.uColor7.value = colorArr[7]
    uniforms.uColorCount.value = colorCount
    uniforms.uLightMode.value = p.lightMode ? 1 : 0
  }

  // Recalcula a contagem de "blinds" a partir do tamanho atual do container
  // e das props mais recentes (blindCount / blindMinWidth).
  const updateBlindCount = (uniforms, rectWidth) => {
    const p = propsRef.current
    if (p.blindMinWidth && p.blindMinWidth > 0) {
      const maxByMinWidth = Math.max(1, Math.floor(rectWidth / p.blindMinWidth))
      const effective = p.blindCount ? Math.min(p.blindCount, maxByMinWidth) : maxByMinWidth
      uniforms.uBlindCount.value = Math.max(1, effective)
    } else {
      uniforms.uBlindCount.value = Math.max(1, p.blindCount)
    }
  }

  // Cria/destrói o contexto WebGL sob demanda (só existe perto da tela) para
  // não estourar o limite de contextos WebGL simultâneos com muitos slides.
  // Roda uma única vez: mudanças de props depois disso só atualizam os
  // uniforms (ver efeito abaixo), sem recriar o canvas — evitar isso é o que
  // faz a animação não "piscar"/reiniciar a cada navegação de slide.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let raf = 0
    let isPageVisible = !document.hidden

    const mount = () => {
      if (ctxRef.current) return

      const p = propsRef.current
      const renderer = new Renderer({
        dpr: p.dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1),
        alpha: true,
        antialias: true,
      })
      const gl = renderer.gl
      const canvas = gl.canvas

      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.display = 'block'
      container.appendChild(canvas)

      const uniforms = {
        iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
        iMouse: { value: [0, 0] },
        iTime: { value: 0 },
        uAngle: { value: 0 },
        uNoise: { value: 0 },
        uBlindCount: { value: 1 },
        uSpotlightRadius: { value: 0.5 },
        uSpotlightSoftness: { value: 1 },
        uSpotlightOpacity: { value: 1 },
        uMirror: { value: 0 },
        uDistort: { value: 0 },
        uShineFlip: { value: 0 },
        uColor0: { value: [1, 1, 1] },
        uColor1: { value: [1, 1, 1] },
        uColor2: { value: [1, 1, 1] },
        uColor3: { value: [1, 1, 1] },
        uColor4: { value: [1, 1, 1] },
        uColor5: { value: [1, 1, 1] },
        uColor6: { value: [1, 1, 1] },
        uColor7: { value: [1, 1, 1] },
        uColorCount: { value: 2 },
        uLightMode: { value: 0 },
      }
      applyUniforms(uniforms)

      const program = new Program(gl, { vertex, fragment, uniforms })
      const geometry = new Triangle(gl)
      const mesh = new Mesh(gl, { geometry, program })

      const resize = () => {
        const rect = container.getBoundingClientRect()
        renderer.setSize(rect.width, rect.height)
        uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1]

        updateBlindCount(uniforms, rect.width)

        if (firstResizeRef.current) {
          firstResizeRef.current = false
          const origin = propsRef.current.spotlightOrigin
          const cx = gl.drawingBufferWidth * origin[0]
          const cy = gl.drawingBufferHeight * origin[1]
          uniforms.iMouse.value = [cx, cy]
          mouseTargetRef.current = [cx, cy]
        }
      }

      const ro = new ResizeObserver(resize)
      ro.observe(container)
      resize()

      const loop = (t) => {
        raf = requestAnimationFrame(loop)
        const sec = t * 0.001
        uniforms.iTime.value = sec

        // Oscila o spotlight entre topo-direita (0.82) e inferior-esquerda (0.18)
        const f = Math.sin(sec * 0.28) * 0.5 + 0.5  // período ~22 s
        uniforms.iMouse.value = [
          gl.drawingBufferWidth  * (0.18 + f * 0.64),
          gl.drawingBufferHeight * (0.18 + f * 0.64),
        ]

        if (!propsRef.current.paused) {
          try {
            renderer.render({ scene: mesh })
          } catch (e) {
            console.error(e)
          }
        }
      }
      if (isPageVisible) raf = requestAnimationFrame(loop)

      ctxRef.current = { renderer, gl, canvas, program, mesh, ro }
    }

    const unmount = () => {
      const ctx = ctxRef.current
      if (!ctx) return
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
      ctx.ro.disconnect()
      try {
        container.removeChild(ctx.canvas)
      } catch {
        /* ignore */
      }
      ctx.gl.getExtension('WEBGL_lose_context')?.loseContext()
      ctxRef.current = null
      firstResizeRef.current = true
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? mount() : unmount()),
      { rootMargin: '0px 300%' }
    )
    io.observe(container)

    const onVisibility = () => {
      isPageVisible = !document.hidden
      const ctx = ctxRef.current
      if (!ctx) return
      if (isPageVisible && raf === 0) {
        const loop = (t) => {
          raf = requestAnimationFrame(loop)
          const sec = t * 0.001
          ctx.program.uniforms.iTime.value = sec
          const f = Math.sin(sec * 0.28) * 0.5 + 0.5
          ctx.program.uniforms.iMouse.value = [
            ctx.gl.drawingBufferWidth  * (0.18 + f * 0.64),
            ctx.gl.drawingBufferHeight * (0.18 + f * 0.64),
          ]
          if (!propsRef.current.paused) {
            try {
              ctx.renderer.render({ scene: ctx.mesh })
            } catch (e) {
              console.error(e)
            }
          }
        }
        raf = requestAnimationFrame(loop)
      } else if (!isPageVisible && raf !== 0) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      unmount()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Repassa mudanças de props para os uniforms já montados, sem recriar o
  // contexto WebGL (isso é o que evita o flicker ao navegar entre slides).
  useEffect(() => {
    const ctx = ctxRef.current
    if (!ctx || !containerRef.current) return
    applyUniforms(ctx.program.uniforms)
    const rect = containerRef.current.getBoundingClientRect()
    updateBlindCount(ctx.program.uniforms, rect.width)
  })

  return (
    <div
      ref={containerRef}
      className={`gradient-blinds-root ${className}`.trim()}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        ...(!lightMode && mixBlendMode ? { mixBlendMode } : {}),
      }}
    />
  )
}
