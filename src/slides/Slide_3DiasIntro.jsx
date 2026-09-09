import styles from './Slide_3DiasIntro.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function Slide3DiasIntro() {
  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.blindsBg}>
        <GradientBlinds
          gradientColors={['#10B981', '#0d4a36']}
          angle={12}
          noise={0.25}
          blindCount={22}
          blindMinWidth={28}
          spotlightRadius={0.4}
          spotlightSoftness={1}
          spotlightOpacity={0.8}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.card}>
          <span className={styles.eyebrow}>A formação começa com</span>
          <div className={styles.number}>3</div>
          <p className={styles.label}>dias intensivos de<br />imersão presencial</p>
          <div className={styles.divider} />
          <p className={styles.sub}>Teoria, prática cirúrgica e mentoria de negócios — tudo no mesmo evento.</p>
        </div>
      </div>
    </section>
  )
}
