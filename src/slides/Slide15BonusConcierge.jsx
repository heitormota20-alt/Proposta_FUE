import styles from './Slide15BonusConcierge.module.css'

const bullets = [
  'Uma plataforma educacional com experiência estilo Netflix',
  'Mais de 40 horas de conteúdos para você assistir e reassistir a qualquer momento e de onde estiver (seja pelo computador ou pelo celular)',
  'Duas trilhas de aprendizado focadas em fazer você evoluir como cirurgião e empresário',
]

export default function Slide15BonusConcierge() {
  return (
    <section className={`slide ${styles.slide}`}>
      <img
        src="/images/Slide_19/imagem-01.webp"
        alt=""
        className={styles.bg}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.badge}>ONLINE</span>
          <h1 className={styles.title}>
            Conteúdos elaborados para te transformar em um profissional de ponta.
          </h1>
          <ul className={styles.list}>
            {bullets.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.dot} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
