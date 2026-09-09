import styles from './Slide18Recap.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide18Recap() {
  const entregaveis = [
    'Treinamento Presencial Hands On',
    'Encontro Presencial de Fellow',
    'Encontros Ao Vivo em Grupo',
    'Conteúdo Online Exclusivo',
    'Certificação Oficial',
    'Acesso à Comunidade Exclusiva',
    'Biblioteca de Procedimentos Gravados',
    'Concierge Pessoal',
    'Workshop Acelerador de Carreiras',
    'Encontros Outside com Grandes Nomes',
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="5%" left="45%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Recapitulando…</span>
          <h2 className={styles.title}>
            O que torna o <em className={styles.accent}>FUE Ultramar</em> único?
          </h2>
        </div>

        <div className={styles.grid}>
          {entregaveis.map((e, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.check}>✓</span>
              <span className={styles.itemText}>{e}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
