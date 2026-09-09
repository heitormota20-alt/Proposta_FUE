import styles from './Slide01Hero.module.css'

export default function Slide01Hero() {
  return (
    <section className={`slide ${styles.hero}`}>

      {/* ── Vídeo de fundo em loop ── */}
      <video
        src="/images/Hair_follicle_swaying_gently_202609081827.mp4"
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

      {/* ── Topo ── */}
      <header className={styles.header}>
        <span className={styles.headerTag}>Proposta Comercial · Turma 4</span>
      </header>

      {/* ── Rodapé ── */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <p className={styles.desc}>
            O método prático para médicos que querem<br />
            dominar o transplante capilar com excelência.
          </p>
        </div>

      </footer>

    </section>
  )
}
