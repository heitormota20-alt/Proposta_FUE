import styles from './Slide18Recap.module.css'

export default function Slide18Recap() {
  return (
    <section className={`slide ${styles.slide}`}>
      {/* ── Foto como background ── */}
      <img
        src="/images/Slide_31/banner-home.png"
        alt=""
        className={styles.bg}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.badge}>Recapitulando…</span>
        <h2 className={styles.title}>
          O que torna o <em className={styles.accent}>FUE Ultramar</em> único?
        </h2>
      </div>
    </section>
  )
}
