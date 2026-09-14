import styles from './Slide21Pagamento.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

// Mesma lista de entregáveis do Slide19Entregaveis (conteúdo 34), reaproveitada
// aqui do lado direito como "tudo que você terá acesso".
const items = [
  { label: 'Treinamento Presencial Hands On', value: 'R$ 38.000' },
  { label: '6 Encontros Presenciais de Fellow', value: 'R$ 90.000' },
  { label: 'Encontros AO VIVO em Grupo', value: 'R$ 12.000' },
  { label: 'Conteúdo Online Exclusivo', value: 'R$ 8.000' },
  { label: 'Concierge Pessoal', value: 'R$ 6.497', bonus: true },
  { label: 'Workshop Acelerador de Carreira', value: 'R$ 5.997', bonus: true },
  { label: 'Workshop Mão na Massa', value: 'R$ 5.997', bonus: true },
  { label: 'Biblioteca de Procedimentos Gravados', value: 'R$ 6.997', bonus: true },
  { label: 'Encontros Outside', value: 'IMENSURÁVEL', bonus: true },
  { label: 'Certificado Oficial', value: 'IMENSURÁVEL', bonus: true },
  { label: 'Comunidade de Networking', value: 'IMENSURÁVEL', bonus: true },
]

export default function Slide21Pagamento() {
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
      <GradientOrb variant="teal" size={800} top="10%" right="-20%" opacity={0.2} />
      <GradientOrb variant="mint" size={400} bottom="0%" left="-5%" opacity={0.1} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Turma 4 · 1º Lote</span>

          <h1 className={styles.title}>
            Valores do programa<br /><em className={styles.accent}>FUE Ultramar</em>
          </h1>

          <div className={styles.priceBlock}>
            <h2 className={styles.priceLabel}>Valor:</h2>

            <div className={styles.priceLine}>
              <span className={styles.priceMain}>R$85.000,00</span>
              <span className={styles.priceTag}>à Vista</span>
            </div>

            <div className={styles.priceLine}>
              <span className={styles.priceInstallment}>+12x de R$6.250,00</span>
            </div>
          </div>

          <p className={styles.footer}>
            Programa FUE Ultramar · Turma 4 · Apenas 10 vagas disponíveis
          </p>
        </div>

        <div className={styles.right}>
          <h2 className={styles.rightTitle}>
            Tudo que você terá acesso no programa <em className={styles.accent}>FUE Ultramar</em>
          </h2>

          <div className={styles.table}>
            {items.map((item, i) => (
              <div key={i} className={styles.row}>
                <span className={styles.rowLabel}>
                  {item.bonus && <span className={styles.bonusPill}>BÔNUS</span>}
                  {item.label}
                </span>
                <span className={`${styles.rowValue} ${item.value === 'IMENSURÁVEL' ? styles.immeasurable : ''}`}>
                  {item.value}
                </span>
              </div>
            ))}
            <div className={`${styles.row} ${styles.totalRow}`}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.totalValue}>+ de R$ 173.000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
