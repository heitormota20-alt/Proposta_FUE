import styles from './Slide14Bonus.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function Slide14Bonus() {
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
            A jornada completa para se tornar o melhor cirurgião em transplante capilar e dominar a arte de construir um negócio e uma clínica de agenda lotada.
          </p>
        </div>

      </div>
    </section>
  )
}
