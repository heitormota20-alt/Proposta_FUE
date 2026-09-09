import styles from './Slide_UltClinic.module.css'
import GradientOrb from '../components/GradientOrb'

const modulos = [
  'Fundamentos e anatomia do couro cabeludo',
  'Técnica FUE passo a passo — extração e implante',
  'Planejamento cirúrgico e densidade capilar',
  'Manejo de complicações e cuidados pós-operatórios',
  'Protocolo de atendimento e encantamento do paciente',
  'Casos clínicos comentados em vídeo com Dr. Rafael',
]

export default function SlideUltClinic() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="-10%" right="-10%" opacity={0.18} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>ONLINE · TRILHA 01</span>
          <h2 className={styles.title}>Ultramar <em className={styles.accent}>Clinic</em></h2>
          <p className={styles.sub}>
            Metodologia de aceleração clínica para médicos que querem dominar as melhores técnicas de cirurgia para transplante capilar.
          </p>
        </div>

        <div className={styles.grid}>
          {modulos.map((m, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.itemNum}>0{i + 1}</span>
              <span className={styles.itemText}>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
