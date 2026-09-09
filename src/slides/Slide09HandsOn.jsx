import styles from './Slide09HandsOn.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide09HandsOn() {
  const dias = [
    {
      num: '01',
      label: 'IMERSÃO TEÓRICA',
      items: ['Técnica + Planejamento Cirúrgico', 'Produção de Conteúdo', 'Marketing e Conversão', 'Encantamento do Cliente'],
    },
    {
      num: '02-03',
      label: 'IMERSÃO PRÁTICA',
      items: ['Treinamento com Equipe Cirúrgica', 'Participação em Transplantes Reais', 'Aplicação de Técnicas em Tempos Cirúrgicos', 'Hands-On guiado pelos Mentores'],
    },
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="-15%" right="-10%" opacity={0.22} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>PRESENCIAL · PARTE 02</span>
          <h2 className={styles.title}>
            Imersão de <em className={styles.accent}>Hands-On</em> Prática
          </h2>
          <p className={styles.sub}>3 dias de treinamento intensivo na clínica do Dr. Rafael Ultramar.</p>
        </div>

        <div className={styles.cards}>
          {dias.map((d) => (
            <div key={d.num} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.dayNum}>DIA {d.num}</span>
                <span className={styles.dayLabel}>{d.label}</span>
              </div>
              <ul className={styles.list}>
                {d.items.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.dot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
