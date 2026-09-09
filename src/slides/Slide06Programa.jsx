import styles from './Slide06Programa.module.css'
import GradientOrb from '../components/GradientOrb'
import CursorGrid from '../components/CursorGrid'

export default function Slide06Programa() {
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

        {/* ── Bullets ── */}
        <div className={styles.bullets}>
          <p className={styles.bulletCol}>
            Turmas exclusivas<br />No máximo 10 alunos
          </p>
          <p className={styles.bulletCol}>
            Da prática capilar aos<br />bastidores de uma clínica<br />numa visão de negócio
          </p>
          <p className={styles.bulletCol}>
            6 meses de<br />acompanhamento próximo
          </p>
        </div>

      </div>
    </section>
  )
}
