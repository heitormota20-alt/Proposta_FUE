import styles from './Slide_QuantoPagaria.module.css'
import GradientOrb from '../components/GradientOrb'

export default function SlideQuantoPagaria() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={1000} top="-10%" left="20%" opacity={0.18} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Antes de revelar o investimento…</span>
        <h2 className={styles.question}>
          Quanto você <em className={styles.accent}>pagaria</em> por tudo isso?
        </h2>
        <p className={styles.hint}>Pense no valor que cada entregável representa para a sua carreira.</p>
      </div>
    </section>
  )
}
