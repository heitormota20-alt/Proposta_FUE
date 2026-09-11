import styles from './Slide19Entregaveis.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

// Um único passo extra: clicar em avançar, já no fim deste slide, não navega
// para o próximo — abre um overlay em vidro fosco por cima do próprio slide,
// desfocando a tabela para dar leitura ao "Valor Oficial".
export const SLIDE19_STEPS = 1

export default function Slide19Entregaveis({ revealedUpTo = -1 }) {
  const overlayOpen = revealedUpTo >= 0

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
      <GradientOrb variant="teal" size={600} top="-15%" right="-10%" opacity={0.16} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>Recapitulando os entregáveis</h1>
          <h2 className={styles.subtitle}>E calculando quanto vale cada um individualmente</h2>
        </div>

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

      {/* ── Overlay "Valor Oficial" — entra por cima do slide, desfocando a
          tabela, sem navegar para o próximo slide ── */}
      <div className={`${styles.overlay} ${overlayOpen ? styles.overlay_in : styles.overlay_idle}`} aria-hidden={!overlayOpen}>
        <div className={styles.card}>
          <h1 className={styles.overlayTitle}>
            Valor <em className={styles.accentItalic}>oficial</em> do acesso ao{' '}
            <strong className={styles.accentBold}>FUE Ultramar</strong>
          </h1>

          <div className={styles.priceStack}>
            <span className={styles.oldPrice}>R$ 173.000,00</span>
            <div className={styles.newPrice}>
              <span className={styles.newPriceLabel}>por</span>
              <span className={styles.newPriceValue}>R$ 105.000,00</span>
            </div>
          </div>

          <p className={styles.discount}>desconto de +R$ 68.000,00</p>
        </div>
      </div>
    </section>
  )
}
