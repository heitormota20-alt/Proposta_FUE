import { Calendar, Luggage, TrendingUp, LifeBuoy } from 'lucide-react'
import styles from './Slide28Concierge.module.css'
import GradientBlinds from '../components/GradientBlinds'

const bullets = [
  {
    Icon: Calendar,
    text: <>Gestão de datas e <em>encontros pessoais</em>;</>,
  },
  {
    Icon: Luggage,
    text: <>Auxílio com <em>translados</em>, <em>hospedagem</em> <em>e estadia</em> do mentorado;</>,
  },
  {
    Icon: TrendingUp,
    text: <>Acompanhamento de <em>resultados</em>;</>,
  },
  {
    Icon: LifeBuoy,
    text: <>Suporte por <em>dúvidas</em> <em>e dificuldades</em>.</>,
  },
]

export const SLIDE28_STEPS = bullets.length

export default function Slide28Concierge({ revealedUpTo = -1 }) {
  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <GradientBlinds
          lightMode
          gradientColors={['#0d4a36', '#0d4a36']}
          color1="#0d4a36"
          color2="#0d4a36"
          angle={0}
          noise={0.2}
          blindCount={28}
          blindMinWidth={22}
          spotlightRadius={0.4}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>

      <div className={styles.inner}>
        <span className={styles.badge}>Bônus 01</span>
        <h1 className={styles.title}><em className={styles.titleAccent}>Concierge</em> Pessoal</h1>
        <p className={styles.sub}>
          Você terá um concierge dedicado a <em>acompanhar</em> seus <em>resultados</em> e te ajudar com{' '}
          <em>qualquer tipo de dificuldade e dúvidas</em> como:
        </p>

        <div className={styles.grid}>
          {bullets.map(({ Icon, text }, i) => (
            <div
              key={i}
              className={`${styles.item} ${i <= revealedUpTo ? styles.item_in : styles.item_idle}`}
              style={{ '--item-delay': `${i * 60}ms` }}
            >
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} strokeWidth={1.75} />
              </div>
              <p className={styles.itemText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
