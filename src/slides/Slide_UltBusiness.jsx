import styles from './Slide_UltBusiness.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function SlideUltBusiness() {
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
          <span className={styles.badge}>Mas as experiências presenciais não acabam por aí.</span>
          <h1 className={styles.title}>
            Uma <em className={styles.accent}>jornada acompanhada</em>, vivenciando a rotina completa com o Dr. Rafael Ultramar.
          </h1>
          <p className={styles.sub}>Da recepção do paciente à conclusão de uma cirurgia.</p>
        </div>

      </div>
    </section>
  )
}
