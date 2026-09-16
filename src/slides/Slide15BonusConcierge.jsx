import styles from './Slide15BonusConcierge.module.css'

const bullets = [
  <>Uma plataforma <em className={styles.em}>educacional</em> com experiência estilo Netflix;</>,
  <>Mais de <em className={styles.em}>40 horas de conteúdo</em> para você assistir e reassistir a <em className={styles.em}>qualquer momento onde estiver</em> (seja pelo computador ou pelo celular);</>,
  <>Duas trilhas de aprendizado focadas em fazer você evoluir como <em className={styles.em}>cirurgião</em> e&nbsp;<em className={styles.em}>empresário</em>.</>,
]

export const SLIDE_CONCIERGE_STEPS = bullets.length

export default function Slide15BonusConcierge({ revealedUpTo = -1 }) {
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
            Conteúdos elaborados<br />
            para te <em className={styles.accent}>transformar</em> em<br />
            um <em className={styles.accent}>profissional</em> de ponta.
          </h1>
          <ul className={styles.list}>
            {bullets.map((item, i) => (
              <li
                key={i}
                className={`${styles.item} ${revealedUpTo >= i ? styles.item_in : styles.item_idle}`}
                style={{ '--item-delay': `${i * 60}ms` }}
              >
                <span className={styles.dot} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
