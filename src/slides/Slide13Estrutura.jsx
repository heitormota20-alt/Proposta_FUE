import styles from './Slide13Estrutura.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide13Estrutura() {
  const items = [
    {
      icon: '🔥',
      label: 'Treinamento Presencial Hands On',
      desc: '1 dia teórico e 2 dias imersivos na Clínica vivenciando cirurgias reais',
    },
    {
      icon: '📍',
      label: 'Encontros Presenciais de Fellow',
      desc: '6 dias divididos em 3 meses (você e mais um aluno) acompanhando os bastidores da clínica',
    },
    {
      icon: '💻',
      label: 'Conteúdo Online Exclusivo',
      desc: 'Ultramar Clinic & Ultramar Business — da técnica à gestão completa do negócio',
    },
    {
      icon: '👨‍💻',
      label: '5 Encontros Ao Vivo em Grupo',
      desc: 'Sessões de aprofundamento e tira-dúvidas direto com Dr. Rafael',
    },
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="-10%" right="-10%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Resumo Completo</span>
          <h2 className={styles.title}>
            Estrutura da <em className={styles.accent}>Formação</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <div>
                <h3 className={styles.cardLabel}>{item.label}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
