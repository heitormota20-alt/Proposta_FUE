import styles from './Slide_MasNaoPaga.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

// Um único passo extra: clicar em avançar, já no fim deste slide, não navega
// para o próximo — abre um overlay em vidro fosco por cima do próprio slide,
// com o desconto de primeiro lote (mesmo efeito do Slide19Entregaveis).
export const SLIDE_MASNAOPAGA_STEPS = 1

export default function SlideMasNaoPaga({ revealedUpTo = -1 }) {
  const overlayOpen = revealedUpTo >= 0

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
        <h1 className={styles.statement}>
          Mas você <em className={styles.accent}>não vai pagar</em> esse valor...
        </h1>
      </div>

      {/* ── Overlay "Desconto de primeiro lote" — entra por cima do slide,
          sem navegar para o próximo slide ── */}
      <div className={`${styles.overlay} ${overlayOpen ? styles.overlay_in : styles.overlay_idle}`} aria-hidden={!overlayOpen}>
        <div className={styles.card}>
          <h1 className={styles.overlayTitle}>Programa FUE Ultramar — Turma 4</h1>
          <p className={styles.overlaySubtitle}>
            <em className={styles.accentItalic}>Desconto especial de primeiro lote:</em>
          </p>
          <div className={styles.overlayPriceBox}>
            <span className={styles.overlayPrice}>R$ 20.000,00</span>
          </div>
        </div>
      </div>
    </section>
  )
}
