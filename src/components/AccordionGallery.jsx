import { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import styles from './AccordionGallery.module.css'

const DEFAULT_ITEMS = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' },
]

export default function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 2,
  activeIndex: controlledActive,
  onActiveChange,
  accentColor = '#ffffff',
  overlayColor = '#060010',
  textColor = '#ffffff',
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  labelStyle = {},
  className = '',
}) {
  const rootRef = useRef(null)
  const panelRefs = useRef([])
  const mediaRefs = useRef([])
  const barRefs = useRef([])
  const textRefs = useRef([])
  const tlRef = useRef(null)
  const firstRunRef = useRef(true)
  const mediaSizeRef = useRef(320)

  const vertical = orientation === 'vertical'
  const count = items.length
  const isControlled = controlledActive !== undefined
  const [internalActive, setInternalActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1))
  const active = isControlled ? Math.min(Math.max(controlledActive, 0), count - 1) : internalActive
  const setActive = useCallback(
    (value) => {
      const resolved = typeof value === 'function' ? value(active) : value
      if (isControlled) {
        onActiveChange?.(resolved)
      } else {
        setInternalActive(resolved)
      }
    },
    [isControlled, onActiveChange, active]
  )

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const overlayBg = `linear-gradient(180deg, transparent 45%, color-mix(in srgb, ${overlayColor} 78%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`

  const applyLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current
      if (!panels.length) return

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9)
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1
      const mediaSize = mediaSizeRef.current

      tlRef.current?.kill()
      const dur = animate && !prefersReduced ? duration : 0
      const tl = gsap.timeline()

      panels.forEach((panel, i) => {
        if (!panel) return
        const isActive = i === active
        const media = mediaRefs.current[i]
        const bar = barRefs.current[i]
        const text = textRefs.current[i]

        const rot = isActive ? 0 : i < active ? tilt : -tilt
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot }

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0)

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i))
          const shift = drift * parallax * mediaSize * 0.06
          const gray = grayscale ? (isActive ? 0 : 1) : 0
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.35,
              duration: dur,
              ease,
            },
            0
          )
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0)
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0)
          }
        }
      })

      tlRef.current = tl
    },
    [active, count, expandRatio, duration, ease, vertical, tilt, parallax, grayscale, showLabels, stagger, prefersReduced]
  )

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const measure = () => {
      const rect = el.getBoundingClientRect()
      const total = vertical ? rect.height : rect.width
      const usable = Math.max(total - gap * (count - 1), 120)
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22)
      mediaSizeRef.current = size
      el.style.setProperty('--ag-media-size', `${size}px`)
      applyLayout(!firstRunRef.current)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [applyLayout, gap, count, expandRatio, vertical])

  useEffect(() => {
    applyLayout(!firstRunRef.current)
    firstRunRef.current = false
  }, [applyLayout])

  useEffect(
    () => () => {
      tlRef.current?.kill()
    },
    []
  )

  const handleEnter = (i) => {
    if (trigger === 'hover') setActive(i)
  }

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault()
      setActive(i)
    }
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i + 1) % count)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i - 1 + count) % count)
    }
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${vertical ? styles.vertical : styles.horizontal} ${className}`.trim()}
      style={{ gap: `${gap}px`, height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px` }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active
        const Tag = item.link ? 'a' : 'div'
        const plainLabel = item.ariaLabel || (typeof item.label === 'string' ? item.label : item.alt || '')
        return (
          <Tag
            key={i}
            ref={(el) => {
              panelRefs.current[i] = el
            }}
            className={styles.panel}
            style={{
              borderRadius: `${radius}px`,
              '--ag-accent': accentColor,
              willChange: 'flex-grow, transform',
            }}
            href={item.link || undefined}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={plainLabel}
          >
            <span className={styles.clip}>
              <span
                ref={(el) => {
                  mediaRefs.current[i] = el
                }}
                className={styles.media}
                style={{
                  width: vertical ? '100%' : 'var(--ag-media-size, 320px)',
                  height: vertical ? 'var(--ag-media-size, 320px)' : '100%',
                  willChange: 'transform, filter',
                }}
              >
                <img
                  src={item.image}
                  alt={plainLabel}
                  draggable={false}
                  className={styles.img}
                  style={item.imgStyle}
                />
              </span>
              <span className={styles.overlay} style={{ background: overlayBg }} aria-hidden="true" />
              {item.bottomFade && (
                <span
                  className={styles.bottomFade}
                  style={{ background: `linear-gradient(to top, ${item.bottomFade} 0%, transparent 40%)` }}
                  aria-hidden="true"
                />
              )}
            </span>
            {showLabels && (
              <span className={styles.caption} aria-hidden="true">
                <span
                  ref={(el) => {
                    barRefs.current[i] = el
                  }}
                  className={styles.bar}
                  style={{
                    background: accentColor,
                    boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`,
                  }}
                />
                <span
                  ref={(el) => {
                    textRefs.current[i] = el
                  }}
                  className={`${styles.labelGroup}${item.tagline ? ` ${styles.hasTagline}` : ''}`}
                >
                  {item.statNumber ? (
                    <>
                      <span className={styles.statNumber} style={{ color: accentColor }}>{item.statNumber}</span>
                      <span className={styles.statText} style={{ color: textColor }}>{item.statText}</span>
                    </>
                  ) : item.tagline ? (
                    <>
                      <span className={styles.tagline} style={{ color: accentColor }}>{item.tagline}</span>
                      <span className={styles.label} style={{ color: textColor, ...labelStyle }}>{item.label}</span>
                    </>
                  ) : (
                    <span className={styles.label} style={{ color: textColor, ...labelStyle }}>{item.label}</span>
                  )}
                </span>
              </span>
            )}
          </Tag>
        )
      })}
    </div>
  )
}
