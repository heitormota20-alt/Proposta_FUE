import styles from './Slide12Mentorias.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide12Mentorias() {
  const temas = ['Marketing', 'Posicionamento', 'Vendas', 'Gestão', 'Análise Clínica']

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="20%" left="50%" opacity={0.18} />

      <div className={styles.inner}>
        <span className={styles.badge}>AO VIVO</span>

        <h2 className={styles.title}>
          Mentorias <em className={styles.accent}>quinzenais</em> direto com Dr. Rafael.
        </h2>

        <p className={styles.body}>
          Encontros ao vivo no Zoom para aprofundarmos em temas extremamente importantes. Todos os encontros ficam gravados e disponíveis na sua área do aluno.
        </p>

        <div className={styles.temas}>
          {temas.map((t) => (
            <span key={t} className={styles.tema}>{t}</span>
          ))}
        </div>

        <div className={styles.detail}>
          <div className={styles.detailItem}>
            <span className={styles.detailNum}>4</span>
            <span className={styles.detailLabel}>meses de mentorias ao vivo</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailNum}>5</span>
            <span className={styles.detailLabel}>encontros de aprofundamento</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailNum}>∞</span>
            <span className={styles.detailLabel}>gravações disponíveis</span>
          </div>
        </div>
      </div>
    </section>
  )
}
