import styles from './Slide11Online.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide11Online() {
  const tracks = [
    {
      name: 'Ultramar Clinic',
      desc: 'Metodologia de aceleração clínica para médicos que querem dominar as melhores técnicas de cirurgia para transplante capilar.',
      tag: 'TÉCNICA CIRÚRGICA',
    },
    {
      name: 'Ultramar Business',
      desc: 'A visão do Dr. Rafael Ultramar sobre negócios e o passo a passo de como ele saiu do absoluto zero para uma clínica que faturou mais de R$15 milhões no último ano.',
      tag: 'GESTÃO & NEGÓCIOS',
    },
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="-20%" right="-15%" opacity={0.2} />
      <GradientOrb variant="blue" size={400} bottom="5%" left="5%" opacity={0.1} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>ONLINE</span>
          <h2 className={styles.title}>
            A jornada completa para se tornar o{' '}
            <em className={styles.accent}>melhor cirurgião</em>{' '}
            em transplante capilar.
          </h2>
          <p className={styles.sub}>
            Plataforma educacional estilo Netflix · +40 horas de conteúdo · 2 trilhas de aprendizado
          </p>
        </div>

        <div className={styles.tracks}>
          {tracks.map((t) => (
            <div key={t.name} className={styles.track}>
              <span className={styles.trackTag}>{t.tag}</span>
              <h3 className={styles.trackName}>{t.name}</h3>
              <p className={styles.trackDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
