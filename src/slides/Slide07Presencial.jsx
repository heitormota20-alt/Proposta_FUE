import styles from './Slide07Presencial.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide07Presencial() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="-10%" left="60%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.badge}>PRESENCIAIS</span>
          <h2 className={styles.title}>
            Você vai operar junto com o{' '}
            <em className={styles.accent}>Dr. Rafael Ultramar</em>{' '}
            e sua equipe.
          </h2>
          <p className={styles.body}>
            Dentro do <strong>centro cirúrgico</strong> dele, com os{' '}
            <strong>melhores equipamentos</strong> e{' '}
            <strong>infraestrutura</strong> do mercado.
          </p>
          <div className={styles.tag}>Da teoria à prática intensa — tudo que um médico procura para ser um bom cirurgião e um bom empresário.</div>
        </div>

        <div className={styles.right}>
          <div className={styles.statCard}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>dias intensivos de<br />imersão presencial</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNum}>6</span>
            <span className={styles.statLabel}>encontros de fellowship<br />na clínica real</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNum}>10</span>
            <span className={styles.statLabel}>alunos por turma<br />máximo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
