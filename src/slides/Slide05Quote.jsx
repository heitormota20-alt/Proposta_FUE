import styles from './Slide05Quote.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide05Quote() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="20%" left="50%" opacity={0.18} />

      <div className={styles.inner}>
        <span className={styles.quoteMarks}>"</span>
        <blockquote className={styles.quote}>
          O que mudou a minha vida foi a{' '}
          <em className={styles.accent}>coragem de tomar decisões</em>{' '}
          que me fizessem alcançar os resultados que eu sonhava.
        </blockquote>
        <cite className={styles.author}>— Dr. Rafael Ultramar</cite>
      </div>
    </section>
  )
}
