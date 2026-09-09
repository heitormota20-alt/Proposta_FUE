import styles from './Slide10Fellowship.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function Slide10Fellowship() {
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
          <span className={styles.badge}>PARTE 03 · CIRURGIA NO SHAVE</span>
          <h1 className={styles.title}>Presencial</h1>
          <p className={styles.sub}>Dia 2 de Hands on na clínica Dr. Rafael Ultramar.</p>
        </div>

      </div>
    </section>
  )
}
