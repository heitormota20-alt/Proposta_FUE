import styles from './Slide20Preco.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide20Preco() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={900} top="0%" left="30%" opacity={0.22} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Valor Oficial do Programa</span>

        <div className={styles.stack}>
          <div className={styles.strikeRow}>
            <span className={styles.strikeLabel}>Valor total dos entregáveis</span>
            <span className={styles.strikeValue}>R$ 173.000</span>
          </div>
          <div className={styles.strikeRow}>
            <span className={styles.strikeLabel}>Valor do 3º Lote</span>
            <span className={styles.strikeValue}>R$ 105.000</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.priceBlock}>
          <span className={styles.loteTag}>Turma 4 · 1º Lote Especial</span>
          <div className={styles.price}>
            <span className={styles.priceCurrency}>R$</span>
            <span className={styles.priceNum}>85.000</span>
          </div>
          <p className={styles.discount}>Desconto de R$ 20.000 em relação ao 3º lote</p>
        </div>
      </div>
    </section>
  )
}
