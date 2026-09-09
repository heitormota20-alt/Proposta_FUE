import styles from './Slide10Fellowship.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide10Fellowship() {
  const benefits = [
    'Acompanhamento integral de cirurgias reais',
    'Execução supervisionada de técnicas do transplante capilar',
    'Revisão detalhada dos procedimentos executados',
    'Direcionamento contínuo sobre postura, técnica e abordagem clínica',
    'Organização e estruturação de uma equipe cirúrgica eficiente',
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={650} top="10%" left="55%" opacity={0.16} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.badge}>FELLOWSHIP</span>
          <h2 className={styles.title}>
            Uma <em className={styles.accent}>jornada acompanhada</em>, vivenciando a rotina completa com o Dr. Rafael Ultramar.
          </h2>
          <p className={styles.body}>
            Da recepção do paciente à conclusão de uma cirurgia.
          </p>
          <div className={styles.specs}>
            <div className={styles.specItem}>
              <span className={styles.specNum}>3</span>
              <span className={styles.specLabel}>rounds de 2 dias cada</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specNum}>2</span>
              <span className={styles.specLabel}>alunos por vez, somente</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specNum}>6</span>
              <span className={styles.specLabel}>dias totais presenciais</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.rightEyebrow}>O acesso presencial que você procura — e que nenhum concorrente tem</p>
          <ul className={styles.list}>
            {benefits.map((b, i) => (
              <li key={i} className={styles.listItem}>
                <span className={styles.check}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
