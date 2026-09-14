import styles from './Slide20Preco.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

// O título entra direto ao chegar no slide. Cada valor (Entregáveis, 3º Lote)
// aparece mediante clique, e o clique final revela junto o bloco de preço da
// Turma 4 – 1º Lote e as bandeiras de pagamento.
export const SLIDE20_STEPS = 3

export default function Slide20Preco({ revealedUpTo = -1 }) {
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
      <GradientOrb variant="teal" size={900} top="0%" left="30%" opacity={0.15} />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          Valor de Investimento do 1º lote da Quarta Turma do{' '}
          <span className={styles.accent}>FUE ULTRAMAR</span>
        </h1>

        <div className={styles.divider} />

        <div className={styles.stack}>
          <div className={`${styles.strikeRow} ${revealedUpTo >= 0 ? styles.text_in : styles.text_idle}`}>
            <span className={styles.strikeLabel}>Valor dos Entregáveis</span>
            <span className={styles.strikeValue}>R$ 173.000,00</span>
          </div>
          <div className={`${styles.strikeRow} ${revealedUpTo >= 1 ? styles.text_in : styles.text_idle}`}>
            <span className={styles.strikeLabel}>Valor do 3º Lote</span>
            <span className={styles.strikeValue}>R$ 105.000,00</span>
          </div>
        </div>

        <div className={`${styles.priceBlock} ${revealedUpTo >= 2 ? styles.text_in : styles.text_idle}`}>
          <span className={styles.loteTag}>Valor Turma 4 – 1º Lote</span>
          <div className={styles.priceBox}>
            <span className={styles.priceCurrency}>R$</span>
            <span className={styles.priceNum}>85.000</span>
            <span className={styles.priceCents}>,00</span>
          </div>
          <p className={styles.discount}>Desconto de R$ 20.000,00</p>
        </div>

        <img
          src="/images/imgi_4_card-logos.svg"
          alt="Mastercard, Hipercard, Elo, Diners Club, American Express, Visa, Pix"
          className={`${styles.paymentIcons} ${revealedUpTo >= 2 ? styles.text_in : styles.text_idle}`}
        />
      </div>
    </section>
  )
}
