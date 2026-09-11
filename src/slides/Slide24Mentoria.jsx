import styles from './Slide24Mentoria.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function Slide24Mentoria() {
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
          <h1 className={styles.title}>Mentoria</h1>
          <p className={styles.sub}>
            Encontros ao vivo no zoom para aprofundarmos em temas extremamente importantes como:{' '}
            <strong className={styles.highlight}>Marketing, Posicionamento, Vendas, Gestão e Análise clínica.</strong>
          </p>
        </div>

      </div>
    </section>
  )
}
