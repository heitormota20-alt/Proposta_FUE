import { Magnet, Rocket, ShieldAlert, Award, Sparkles, Banknote } from 'lucide-react'
import styles from './Slide16BonusAcelerador.module.css'
import GradientBlinds from '../components/GradientBlinds'

const bullets = [
  {
    Icon: Magnet,
    text: <>Como atrair pacientes que pagam caro e que voltam sempre sem gastar fortunas com&nbsp;anúncios;</>,
  },
  {
    Icon: Rocket,
    text: <>Método para faturar em meses o que muitos não faturam em&nbsp;anos;</>,
  },
  {
    Icon: ShieldAlert,
    text: <>Erros mais comuns que travam a carreira de médicos de TC — e como&nbsp;evitá-los;</>,
  },
  {
    Icon: Award,
    text: <>Estratégias comprovadas para se tornar referência em TC na sua&nbsp;região;</>,
  },
  {
    Icon: Sparkles,
    text: <>Técnicas exclusivas de FUE que farão os pacientes desejar o seu&nbsp;serviço;</>,
  },
  {
    Icon: Banknote,
    text: <>O segredo para elevar em até 3x o ticket médio do seu&nbsp;paciente.</>,
  },
]

export const SLIDE16_STEPS = bullets.length

export default function Slide16BonusAcelerador({ revealedUpTo = -1 }) {
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
        <span className={styles.badge}>Bônus 02</span>
        <h1 className={styles.title}>
          Workshop <em className={styles.titleAccent}>acelerador<br />de carreira</em>
        </h1>
        <p className={styles.sub}>Os segredos que ninguém te conta para ter mais resultados em menos tempo.</p>

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
