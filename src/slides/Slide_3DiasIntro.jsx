import styles from './Slide_3DiasIntro.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide3DiasIntro() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={900} top="5%" left="30%" opacity={0.2} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>A formação começa com</span>
        <div className={styles.number}>3</div>
        <p className={styles.label}>dias intensivos de<br />imersão presencial</p>
        <div className={styles.divider} />
        <p className={styles.sub}>Teoria, prática cirúrgica e mentoria de negócios — tudo no mesmo evento.</p>
      </div>
    </section>
  )
}
