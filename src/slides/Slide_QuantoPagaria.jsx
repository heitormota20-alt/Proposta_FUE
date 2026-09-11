import styles from './Slide_QuantoPagaria.module.css'
import GradientBlinds from '../components/GradientBlinds'

const words = ['Quanto', 'você', 'pagaria', 'por', 'tudo isso']

// +1 step: a interrogação só aparece depois da última palavra ("tudo isso").
export const SLIDE_QUANTOPAGARIA_STEPS = words.length + 1

export default function SlideQuantoPagaria({ revealedUpTo = -1 }) {
  return (
    <section className={`slide ${styles.slide}`}>
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

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Antes de revelar o investimento…</span>

        <h2 className={styles.question}>
          <span className={`${styles.word} ${0 <= revealedUpTo ? styles.word_in : styles.word_idle}`}>
            {words[0]}
          </span>{' '}
          <span className={`${styles.word} ${1 <= revealedUpTo ? styles.word_in : styles.word_idle}`}>
            {words[1]}
          </span>{' '}
          <em className={`${styles.word} ${styles.accent} ${2 <= revealedUpTo ? styles.word_in : styles.word_idle}`}>
            {words[2]}
          </em>{' '}
          <span className={`${styles.word} ${3 <= revealedUpTo ? styles.word_in : styles.word_idle}`}>
            {words[3]}
          </span>{' '}
          <span className={`${styles.word} ${4 <= revealedUpTo ? styles.word_in : styles.word_idle}`}>
            {words[4]}
          </span>
          <span className={`${styles.word} ${5 <= revealedUpTo ? styles.word_in : styles.word_idle}`}>
            ?
          </span>
        </h2>

        <p className={`${styles.hint} ${revealedUpTo >= SLIDE_QUANTOPAGARIA_STEPS - 1 ? styles.text_in : styles.text_idle}`}>
          Pense no valor que cada entregável representa para a sua carreira.
        </p>
      </div>
    </section>
  )
}
