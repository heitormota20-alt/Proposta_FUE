import { FileText, Megaphone, Target } from 'lucide-react'
import styles from './Slide17BonusWorkshop.module.css'
import GradientBlinds from '../components/GradientBlinds'

const bullets = [
  {
    Icon: FileText,
    text: (
      <>
        Acesso a uma biblioteca de roteiros de anúncios já validados para você{' '}
        <em>replicar</em> e conseguir ter clientes{' '}
        <em>desejando fazer transplante com você</em>;
      </>
    ),
  },
  {
    Icon: Megaphone,
    text: (
      <>
        Na prática, os nossos especialistas em <em>marketing</em> avaliarão os seus
        anúncios gravados para você sair do Workshop com eles <em>prontos</em>;
      </>
    ),
  },
  {
    Icon: Target,
    text: (
      <>
        Na prática, nossos especialistas em <em>tráfego pago</em> ajudarão você no{' '}
        <em>passo a passo</em> para que você aprenda e domine a arte de subir
        campanhas assertivas que geram <em>faturamento</em>.
      </>
    ),
  },
]

export const SLIDE17_STEPS = bullets.length

export default function Slide17BonusWorkshop({ revealedUpTo = -1 }) {
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
        <span className={styles.badge}>Bônus 03</span>
        <h1 className={styles.title}>
          Oficina de <em>marketing</em>,<br /><em>tráfego pago</em> e <em>criativos</em>
        </h1>
        <p className={styles.sub}>
          Tenha acesso a estratégias já validadas para aplicar <em>no seu marketing</em> e ter
          resultados (sem precisar de seguidores, autoridade ou até mesmo de equipe).
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
