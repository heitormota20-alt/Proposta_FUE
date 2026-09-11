import styles from './Slide06Programa.module.css'
import GradientOrb from '../components/GradientOrb'
import CursorGrid from '../components/CursorGrid'

const bullets = [
  'Turmas exclusivas\nNo máximo 10 alunos',
  'Da prática capilar aos\nbastidores de uma clínica\nnuma visão de negócio',
  '6 meses de\nacompanhamento próximo',
]

export const SLIDE06_STEPS = bullets.length

export default function Slide06Programa({ revealedUpTo = -1 }) {
  return (
    <section className={`slide ${styles.slide}`}>
      {/* ── Fundo — troque por public/images/Slide_06/bg.jpg quando disponível ── */}
      <div className={styles.bgPlaceholder} aria-hidden="true" />
      <div className={styles.cursorGridBg}>
        <CursorGrid
          cellSize={70}
          color="#15bc85"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1}
          fillOpacity={0}
          gridOpacity={0.06}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <GradientOrb variant="teal" size={520} top="-15%" left="-12%" opacity={0.35} />
      <GradientOrb variant="teal" size={480} bottom="-18%" right="-10%" opacity={0.3} />

      <div className={styles.inner}>

        {/* ── Logo FUE ULTRAMAR ── */}
        <img
          src="/logos/SVG/Logo-horizontal.svg"
          alt="FUE Ultramar"
          className={styles.logo}
        />

        {/* ── Subtítulo ── */}
        <p className={styles.subtitle}>
          O único <strong>programa intensivo</strong> do mercado que vai do absoluto zero
          {' '}ao mais avançado do <strong>Transplante Capilar</strong>.
        </p>

        {/* ── Bullets — aparecem um a um de baixo para cima como pilares ── */}
        <div className={styles.bullets}>
          {bullets.map((text, i) => (
            <div
              key={i}
              className={`${styles.bulletWrap} ${i <= revealedUpTo ? styles.bullet_in : styles.bullet_idle}`}
            >
              <div className={styles.pillarBar} />
              <p className={styles.bulletCol}>
                {text.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
