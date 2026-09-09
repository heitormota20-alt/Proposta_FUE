import styles from './Slide21Pagamento.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide21Pagamento() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={800} top="10%" right="-20%" opacity={0.2} />
      <GradientOrb variant="mint" size={400} bottom="0%" left="-5%" opacity={0.1} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Formas de Pagamento · Turma 4 · 1º Lote</span>

        <h2 className={styles.title}>
          Escolha a forma <em className={styles.accent}>que funciona</em> para você.
        </h2>

        <div className={styles.options}>
          <div className={`${styles.option} ${styles.optionMain}`}>
            <span className={styles.optionTag}>À Vista</span>
            <div className={styles.optionPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>85.000</span>
              <span className={styles.suffix}>,00</span>
            </div>
            <p className={styles.optionDesc}>Pagamento único com o melhor aproveitamento do investimento.</p>
          </div>

          <div className={styles.optionOr}>ou</div>

          <div className={styles.option}>
            <span className={styles.optionTag}>Parcelado</span>
            <div className={styles.optionPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>10.000</span>
            </div>
            <p className={styles.optionDesc}>de entrada + 12x de</p>
            <div className={styles.installment}>
              <span className={styles.currency}>R$</span>
              <span className={styles.installAmount}>6.250</span>
              <span className={styles.noFees}>sem juros</span>
            </div>
          </div>
        </div>

        <p className={styles.footer}>
          Programa FUE Ultramar · Turma 4 · Apenas 10 vagas disponíveis
        </p>
      </div>
    </section>
  )
}
