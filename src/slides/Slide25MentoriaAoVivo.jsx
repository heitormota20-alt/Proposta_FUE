import styles from './Slide25MentoriaAoVivo.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

export default function Slide25MentoriaAoVivo() {
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
      <GradientOrb variant="teal" size={700} top="-15%" right="-10%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.badge}>Ao vivo</span>

          <h1 className={styles.title}>
            Mentorias <em className={styles.accent}>ao vivo</em><br />
            durante <em className={styles.accent}>4 meses</em>
          </h1>

          <p className={styles.lead}>
            Vamos te dar a mão! Você poderá durante toda a sua jornada, aprofundar suas dúvidas diretamente com o Dr. Rafael nos encontros quinzenais da mentoria AO VIVO.
          </p>

          <p className={styles.sub}>
            Todos os encontros{' '}
            <strong className={styles.highlight}>ficarão gravados e disponíveis na sua área do aluno</strong>, para você assistir e reassistir quando quiser (até mesmo quando não conseguir participar).
          </p>
        </div>

        {/* ── Placeholder — imagens a enviar ── */}
        <div className={styles.right}>
          <div className={styles.imageSlot}>
            <span className={styles.imageLabel}>IMAGENS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
