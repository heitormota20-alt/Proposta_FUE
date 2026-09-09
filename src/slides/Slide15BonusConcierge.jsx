import styles from './Slide15BonusConcierge.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide15BonusConcierge() {
  const items = [
    'Gestão das datas de Encontros Presenciais',
    'Auxílio com translados, hospedagem e estadia do mentorado',
    'Acompanhamento de Resultados',
    'Suporte para dúvidas e dificuldades',
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="-5%" right="-5%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.bonusTag}>BÔNUS 01</div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Concierge <em className={styles.accent}>Pessoal</em>
          </h2>
          <p className={styles.body}>
            Você terá um Concierge dedicado a acompanhar seus resultados e te ajudar com qualquer tipo de dificuldade durante toda a sua jornada.
          </p>
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
