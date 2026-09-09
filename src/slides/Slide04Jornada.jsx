import styles from './Slide04Jornada.module.css'
import GradientOrb from '../components/GradientOrb'
import { CountUp } from '../hooks/useCountUp.jsx'

export default function Slide04Jornada() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top={-200} right={-200} opacity={0.25} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Uma jornada de dedicação, coragem e grandes resultados</span>

        <div className={styles.statBlock}>
          <div className={styles.statNumber}>
            +R$<CountUp target={20} suffix=" Mi" duration={2000} />
          </div>
          <p className={styles.statDesc}>
            Saiu de <strong>4 pacientes em Setembro de 2023</strong> para um faturamento de{' '}
            <span className={styles.accent}>+R$20 Milhões</span> nos últimos 12 meses.
          </p>
        </div>

        <div className={styles.divider} />

        <p className={styles.context}>
          Do absoluto zero à referência nacional em Transplante Capilar.
        </p>
      </div>
    </section>
  )
}
