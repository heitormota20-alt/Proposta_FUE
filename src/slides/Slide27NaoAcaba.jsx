import styles from './Slide27NaoAcaba.module.css'
import GradientBlinds from '../components/GradientBlinds'

const words = ['Mas', 'não', 'acaba', 'aqui']

export const SLIDE27_STEPS = words.length

export default function Slide27NaoAcaba({ revealedUpTo = -1 }) {
  const wordClass = (i, accent = false) =>
    `${styles.word} ${accent ? styles.accent : ''} ${i <= revealedUpTo ? styles.word_in : styles.word_idle}`

  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <GradientBlinds
          lightMode
          gradientColors={['#0d4a36', '#0d4a36']}
          color1="#0d4a36"
          color2="#0d4a36"
          angle={0}
          noise={0.2}
          blindCount={28}
          blindMinWidth={22}
          spotlightRadius={0.4}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>

      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={wordClass(0)}>{words[0]}</span>{' '}
          <span className={wordClass(1, true)}>{words[1]}</span>
          <br />
          <span className={wordClass(2, true)}>{words[2]}</span>{' '}
          <span className={wordClass(3)}>{words[3]}</span>
        </h1>

        <p className={`${styles.sub} ${revealedUpTo >= SLIDE27_STEPS - 1 ? styles.sub_in : styles.sub_idle}`}>
          Além de tudo isso, você ainda recebe um pacote <em className={styles.subAccent}>bônus</em> para potencializar os resultados que terá dentro do <em className={styles.subAccent}>FUE Ultramar</em>.
        </p>
      </div>
    </section>
  )
}
