import styles from './Slide14Bonus.module.css'
import GradientBlinds from '../components/GradientBlinds'

export const SLIDE14_STEPS = 2

export default function Slide14Bonus({ revealedUpTo = -1 }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <GradientBlinds
          gradientColors={['#10B981', '#10B981']}
          color1="#10B981"
          color2="#10B981"
          angle={0}
          noise={0.3}
          blindCount={28}
          blindMinWidth={22}
          spotlightRadius={0.35}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      <div className={styles.inner}>

        <div className={styles.card}>
          <span className={styles.badge}>Aprenda no seu ritmo, de onde estiver</span>
          <h1 className={styles.title}>Online</h1>
          <p className={styles.sub}>
            A metodologia mais completa do mercado de transplante capilar para médicos que querem dominar a parte clínica e de negócios por completo.
          </p>
        </div>

        <div className={styles.pillsRow}>
          <span className={`${styles.pill} ${revealedUpTo >= 0 ? styles.pill_in : styles.pill_idle}`}>Master Clinic</span>
          <span className={`${styles.pill} ${revealedUpTo >= 1 ? styles.pill_in : styles.pill_idle}`} style={{ '--pill-delay': '80ms' }}>Master Business</span>
        </div>

      </div>
    </section>
  )
}
