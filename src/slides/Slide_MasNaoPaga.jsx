import styles from './Slide_MasNaoPaga.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

export default function SlideMasNaoPaga() {
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
      <GradientOrb variant="teal" size={900} top="5%" left="25%" opacity={0.2} />

      <div className={styles.inner}>
        <div className={styles.stack}>
          <span className={styles.label}>Valor oficial do programa</span>
          <div className={styles.strikePrice}>R$ 105.000<span className={styles.comma}>,00</span></div>
        </div>

        <div className={styles.divider} />

        <h2 className={styles.statement}>
          Mas você <em className={styles.accent}>não vai</em><br />
          <em className={styles.accent}>pagar</em> esse valor..
        </h2>
      </div>
    </section>
  )
}
