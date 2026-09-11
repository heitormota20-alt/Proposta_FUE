import { Hand, Users, Laptop, Video } from 'lucide-react'
import styles from './Slide26Estrutura.module.css'
import GradientBlinds from '../components/GradientBlinds'

const bullets = [
  {
    Icon: Hand,
    title: <>Treinamento <em>presencial</em> Hands On</>,
    desc: <>1 dia teórico e 2 dias imersivos na clínica vivenciando cirurgias&nbsp;reais.</>,
  },
  {
    Icon: Users,
    title: <>Encontros <em>presenciais de Fellow</em></>,
    desc: <>6 dias divididos em 3 meses (você e mais um aluno) acompanhando os bastidores da clínica do Dr. Rafael&nbsp;Ultramar.</>,
  },
  {
    Icon: Laptop,
    title: <>Conteúdo Online <em>Exclusivo</em></>,
    desc: <>Master Business & Master&nbsp;Clinic.</>,
  },
  {
    Icon: Video,
    title: <>Encontros <em>ao vivo em grupo</em></>,
    desc: <>Sessões de aprofundamento e tira&nbsp;dúvidas.</>,
  },
]

export const SLIDE26_STEPS = bullets.length

export default function Slide26Estrutura({ revealedUpTo = -1 }) {
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

      {/* ── Foto como background, ancorada à direita ── */}
      <img
        src="/images/Slide_26/Slide_26.webp"
        alt=""
        className={styles.bg}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      {/* ── Fade escuro no rodapé — garante leitura do número do slide ── */}
      <div className={styles.bottomFade} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={styles.title}>Estrutura da <em className={styles.accent}>formação</em></h1>

        <div className={styles.grid}>
          {bullets.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className={`${styles.item} ${i <= revealedUpTo ? styles.item_in : styles.item_idle}`}
              style={{ '--item-delay': `${i * 60}ms` }}
            >
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} strokeWidth={1.75} />
              </div>
              <div className={styles.itemText}>
                <h2 className={styles.itemTitle}>{title}</h2>
                <p className={styles.itemDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
