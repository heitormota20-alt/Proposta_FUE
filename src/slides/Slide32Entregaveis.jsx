import {
  Hand, Users, Video, Laptop, BadgeCheck,
  Contact, Film, BellRing, Rocket, Crown,
} from 'lucide-react'
import styles from './Slide32Entregaveis.module.css'
import GradientBlinds from '../components/GradientBlinds'

const entregaveis = [
  { Icon: Hand, text: 'Treinamento Presencial Hands On' },
  { Icon: Users, text: 'Encontro Presencial de Fellow' },
  { Icon: Video, text: 'Encontros Ao Vivo em Grupo' },
  { Icon: Laptop, text: 'Conteúdo Online Exclusivo' },
  { Icon: BadgeCheck, text: 'Certificação Oficial' },
  { Icon: Contact, text: 'Acesso à Comunidade Exclusiva' },
  { Icon: Film, text: 'Biblioteca de Procedimentos Gravados' },
  { Icon: BellRing, text: 'Concierge Pessoal' },
  { Icon: Rocket, text: 'Workshop Acelerador de Carreiras' },
  { Icon: Crown, text: 'Encontros Outside com Grandes Nomes' },
]

export const SLIDE32_STEPS = entregaveis.length

export default function Slide32Entregaveis({ revealedUpTo = -1 }) {
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

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Recapitulando…</span>
          <h2 className={styles.title}>
            Tudo que você leva no <em className={styles.accent}>FUE Ultramar</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {entregaveis.map(({ Icon, text }, i) => (
            <div
              key={i}
              className={`${styles.item} ${i <= revealedUpTo ? styles.item_in : styles.item_idle}`}
              style={{ '--item-delay': `${i * 50}ms` }}
            >
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} strokeWidth={1.75} />
              </div>
              <span className={styles.itemText}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
