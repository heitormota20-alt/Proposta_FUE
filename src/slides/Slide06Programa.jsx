import styles from './Slide06Programa.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide06Programa() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={800} top="-20%" right="-15%" opacity={0.2} />
      <GradientOrb variant="mint" size={400} bottom="10%" left="-5%" opacity={0.12} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>O Programa</span>

        <h2 className={styles.title}>
          O único programa intensivo do mercado que vai do{' '}
          <em className={styles.accent}>absoluto zero</em>{' '}
          ao mais avançado do Transplante Capilar.
        </h2>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>🏥</span>
            <span className={styles.pillarLabel}>PRESENCIAL</span>
            <p className={styles.pillarDesc}>Hands-On na clínica do Dr. Rafael + Fellowship exclusivo</p>
          </div>
          <div className={styles.pillarDiv} />
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>💻</span>
            <span className={styles.pillarLabel}>ONLINE</span>
            <p className={styles.pillarDesc}>Plataforma Netflix com +40h de conteúdo em 2 trilhas</p>
          </div>
          <div className={styles.pillarDiv} />
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>🎥</span>
            <span className={styles.pillarLabel}>AO VIVO</span>
            <p className={styles.pillarDesc}>Mentorias quinzenais direto com Dr. Rafael</p>
          </div>
        </div>

        <div className={styles.detail}>
          <span className={styles.detailTag}>Turmas exclusivas · Máximo 10 alunos</span>
          <span className={styles.detailTag}>6 meses de acompanhamento próximo</span>
        </div>
      </div>
    </section>
  )
}
