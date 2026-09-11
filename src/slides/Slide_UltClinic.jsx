import styles from './Slide_UltClinic.module.css'
import GradientOrb from '../components/GradientOrb'

export default function SlideUltClinic() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="0%" left="-15%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.videoSlot}>
            <video
              src="/images/Video_Slide_16.mp4"
              className={styles.video}
              controls
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.eyebrow}>Resultado real · Turma 1</span>
          <h2 className={styles.title}>
            O <em className={styles.accent}>Dr. Felipe</em><br />nunca havia pego num bisturi.
          </h2>
          <p className={styles.body}>
            Depois dos primeiros Hands On na clínica do Dr. Rafael, sua evolução foi transformadora — da teoria à prática cirúrgica em poucos dias.
          </p>
          <div className={styles.quote}>
            "Entrei sem nunca ter feito uma cirurgia. Saí pronto para operar."
            <span className={styles.quoteAuthor}>— Dr. Felipe, Turma 1</span>
          </div>
        </div>
      </div>
    </section>
  )
}
