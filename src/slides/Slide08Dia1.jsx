import styles from './Slide08Dia1.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide08Dia1() {
  const items = [
    'Marketing, Posicionamento e Produção de Conteúdo',
    'Entrega do Kit de Onboarding Exclusivo',
    'Networking e Conversas com o Dr. Rafael e os outros alunos',
    'LTV no Mercado de Transplante Capilar',
    'Identidade e Branding · Mercado Digital',
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} bottom="-10%" right="-10%" opacity={0.2} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.partTag}>PRESENCIAL · PARTE 01</span>
          <h2 className={styles.title}>
            Um rooftop fechado para{' '}
            <em className={styles.accent}>1 dia inteiro</em>{' '}
            de mentorias sobre negócios.
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.itemNum}>0{i + 1}</span>
              <span className={styles.itemText}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
