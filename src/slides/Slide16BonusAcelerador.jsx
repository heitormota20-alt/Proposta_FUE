import styles from './Slide16BonusAcelerador.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide16BonusAcelerador() {
  const items = [
    'Como atrair pacientes que pagam caro e que voltam sempre sem gastar fortunas com anúncios',
    'Método para faturar em meses o que muitos não faturam em anos',
    'Erros mais comuns que travam a carreira de médicos de TC — e como evitá-los',
    'Estratégias comprovadas para se tornar referência em TC na sua região',
    'Técnicas exclusivas de FUE que farão os pacientes desejar o seu serviço',
    'O segredo para elevar em até 3x o ticket médio do seu paciente',
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="mint" size={600} top="-15%" left="55%" opacity={0.15} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.bonusTag}>BÔNUS 02</span>
          <h2 className={styles.title}>
            Workshop <em className={styles.accent}>Acelerador de Carreira</em>
          </h2>
          <p className={styles.sub}>Os segredos que ninguém te conta para ter mais resultados em menos tempo.</p>
        </div>

        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.num}>0{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
