import styles from './Slide05Quote.module.css'
import GradientOrb from '../components/GradientOrb'
import Grainient from '../components/Grainient'

export default function Slide05Quote() {
  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <Grainient
          color1="#15bc85"
          color2="#000000"
          color3="#79e8c3"
          timeSpeed={0.25}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          contrast={1.5}
          grainAmount={0.1}
          zoom={0.9}
        />
      </div>
      <GradientOrb variant="teal" size={600} top="20%" left="50%" opacity={0.18} />

      <div className={styles.inner}>
        <span className={styles.quoteMarks}>“</span>
        <blockquote className={styles.quote}>
          O que mudou a minha vida foi a{' '}
          <em className={styles.accent}>coragem de tomar decisões</em>{' '}
          que me fizessem alcançar os resultados que eu sonhava.
        </blockquote>
        <span className={`${styles.quoteMarks} ${styles.quoteMarksClose}`}>”</span>
        <cite className={styles.author}>— Dr. Rafael Ultramar</cite>
      </div>
    </section>
  )
}
