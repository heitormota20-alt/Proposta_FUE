import styles from './Slide09HandsOn.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function Slide09HandsOn() {
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
          <div className={styles.header}>
            <span className={styles.badge}>PRESENCIAL · PARTE 01</span>
            <h1 className={styles.title}>Palestras exclusivas com convidados especiais</h1>
          </div>
        </div>

      </div>
    </section>
  )
}
