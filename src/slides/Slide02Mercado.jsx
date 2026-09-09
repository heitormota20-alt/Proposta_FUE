import { useEffect, useRef, useState } from 'react'
import styles from './Slide02Mercado.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'
import { CountUp } from '../hooks/useCountUp.jsx'

function LogoValor() {
  return (
    <div className={styles.logoValor}>
      <span className={styles.valorEco}>econômico</span>
      <span className={styles.valorText}>Valor</span>
    </div>
  )
}

function LogoTerra() {
  return (
    <img
      src="/images/Slide%2002/Terra_Logo.svg"
      alt="Terra"
      className={styles.terraLogo}
    />
  )
}

const cards = [
  {
    logo:   <LogoValor />,
    prefix: 'R$ ',
    number: 35,
    suffix: 'bi',
    label:  'Faturamento mundial em 2024',
    quote:  'O mercado de transplante capilar registrou um faturamento mundial bruto de 35 bilhões de reais em 2024 — crescimento de 15% ao ano.',
  },
  {
    logo:   <LogoTerra />,
    prefix: '',
    number: 42,
    suffix: ' mi',
    label:  'Brasileiros com queda de cabelo',
    quote:  'Mais de 42 Milhões de brasileiros (entre homens e mulheres) sofrem com queda de cabelo.',
  },
  {
    logo:   <LogoValor />,
    prefix: '+',
    number: 21,
    suffix: '%',
    label:  'Crescimento previsto até 2032',
    quote:  'A previsão de crescimento do mercado é de 21% até 2032, alcançando 220,2 bilhões de reais.',
  },
]

export default function Slide02Mercado() {
  const sectionRef = useRef(null)
  const hasVisited = useRef(false)
  const [phase, setPhase] = useState('idle') // 'idle' | 'in' | 'out'
  // Trava em true assim que o usuário entra no slide — os big numbers só
  // disparam a contagem a partir daqui, e nunca mais resetam.
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasVisited.current = true
          setPhase('in')
          setEntered(true)
        } else if (hasVisited.current) {
          setPhase('out')
        }
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`slide ${styles.slide}`}>
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
      <GradientOrb variant="teal" size={500} top={-160} right={-120} opacity={0.22} />
      <GradientOrb variant="teal" size={300} bottom={-80} left={-60}  opacity={0.15} />

      <div className={styles.inner}>

        <div className={`${styles.heading} ${styles[`heading_${phase}`]}`}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Mercado</span>
            <span className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.title}>
            Afinal, qual é o tamanho desse mercado?
          </h2>
          <p className={styles.subtitle}>
            E quanto ele tem{' '}
            <span className={styles.accentText}>crescido a cada ano?</span>
          </p>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[`card_${phase}`]}`}
              style={{ '--delay': `${i * 120 + 180}ms` }}
            >
              <div className={styles.cardStat}>
                <CountUp
                  prefix={card.prefix}
                  target={card.number}
                  suffix={card.suffix}
                  duration={1600}
                  active={entered}
                />
              </div>
              <p className={styles.cardStatLabel}>{card.label}</p>
              <hr className={styles.cardDivider} />
              <p className={styles.cardQuote}>"{card.quote}"</p>
              <div className={styles.cardLogo}>{card.logo}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
