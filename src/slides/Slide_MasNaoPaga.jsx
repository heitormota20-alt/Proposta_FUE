import styles from './Slide_MasNaoPaga.module.css'
import GradientOrb from '../components/GradientOrb'

export default function SlideMasNaoPaga() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={900} top="5%" left="25%" opacity={0.2} />

      <div className={styles.inner}>
        <div className={styles.stack}>
          <span className={styles.label}>Valor oficial do programa</span>
          <div className={styles.strikePrice}>R$ 105.000<span className={styles.comma}>,00</span></div>
        </div>

        <div className={styles.divider} />

        <h2 className={styles.statement}>
          Mas você <em className={styles.accent}>não vai pagar</em> esse valor…
        </h2>
      </div>
    </section>
  )
}
