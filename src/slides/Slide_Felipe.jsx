import styles from './Slide_Felipe.module.css'
import GradientOrb from '../components/GradientOrb'

export default function SlideFelipe() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="0%" right="-15%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Resultado real · Turma 1</span>
          <h2 className={styles.title}>
            O <em className={styles.accent}>Dr. Felipe</em> nunca havia pego num bisturi.
          </h2>
          <p className={styles.body}>
            Depois dos primeiros Hands On na clínica do Dr. Rafael, sua evolução foi transformadora — da teoria à prática cirúrgica em poucos dias.
          </p>
          <div className={styles.quote}>
            "Entrei sem nunca ter feito uma cirurgia. Saí pronto para operar."
            <span className={styles.quoteAuthor}>— Dr. Felipe, Turma 1</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.cardTag}>ANTES</span>
              <div className={styles.photoSlot}>
                <span className={styles.photoLabel}>FOTO</span>
              </div>
              <p className={styles.cardDesc}>Nunca havia pego num bisturi</p>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={`${styles.card} ${styles.cardAfter}`}>
              <span className={styles.cardTag}>DEPOIS</span>
              <div className={styles.photoSlot}>
                <span className={styles.photoLabel}>FOTO</span>
              </div>
              <p className={styles.cardDesc}>Cirurgião formado em transplante capilar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
