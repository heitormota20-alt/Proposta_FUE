import styles from './Slide01Hero.module.css'

export default function Slide01Hero() {
  return (
    <section className={`slide ${styles.hero}`}>

      {/* ── Vídeo de fundo em loop ── */}
      <video
        src="/images/Slide_01/hf_20260911_024817_5d35dced-89c6-4382-8c09-329b243701ab.mp4"
        className={styles.bg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Overlay: escurece bordas, preserva o folículo central */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Rodapé ── */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <p className={styles.desc}>
            O método prático para médicos que querem<br />
            <strong style={{ color: 'var(--accent)', fontWeight: 700, fontStyle: 'italic' }}>dominar o transplante capilar com excelência.</strong>
          </p>
        </div>

      </footer>

    </section>
  )
}
