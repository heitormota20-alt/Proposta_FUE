import styles from './Slide_UltBusiness.module.css'
import GradientOrb from '../components/GradientOrb'

const modulos = [
  'Como sair do zero e montar uma clínica lucrativa',
  'Posicionamento e construção de autoridade digital',
  'Funil de vendas e conversão de leads em pacientes',
  'Gestão financeira e precificação do seu serviço',
  'Equipe cirúrgica: contratação, treinamento e retenção',
  'Escala: como atender mais sem perder qualidade',
]

export default function SlideUltBusiness() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="mint" size={600} top="-10%" right="-10%" opacity={0.15} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.badge}>ONLINE · TRILHA 02</span>
          <h2 className={styles.title}>Ultramar <em className={styles.accent}>Business</em></h2>
          <p className={styles.sub}>
            A visão do Dr. Rafael sobre negócios — o passo a passo de como ele saiu do absoluto zero para uma clínica que faturou mais de R$15 milhões no último ano.
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
