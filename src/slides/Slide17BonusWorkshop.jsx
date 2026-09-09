import styles from './Slide17BonusWorkshop.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide17BonusWorkshop() {
  const items = [
    'Acesso a uma biblioteca de roteiros de anúncios já validados para você replicar',
    'Na prática, especialistas em marketing avaliarão seus anúncios gravados',
    'Especialistas em tráfego pago ajudarão você passo a passo a subir campanhas assertivas',
    'Estratégias já validadas para aplicar no seu marketing sem precisar de seguidores ou equipe',
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={650} top="5%" right="-10%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.bonusTag}>BÔNUS 03</span>
          <h2 className={styles.title}>
            Workshop <em className={styles.accent}>Mão na Massa</em>
          </h2>
          <p className={styles.sub}>Oficina de marketing, tráfego e criativos — resultados práticos e imediatos.</p>
        </div>

        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.arrow}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className={styles.highlight}>
          Saia do Workshop com seus anúncios <strong>prontos.</strong>
        </div>
      </div>
    </section>
  )
}
