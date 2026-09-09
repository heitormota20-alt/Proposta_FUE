import styles from './Slide14Bonus.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide14Bonus() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="10%" left="40%" opacity={0.2} />
      <GradientOrb variant="mint" size={350} bottom="5%" right="5%" opacity={0.1} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Mas não acaba aqui…</span>
        <h2 className={styles.title}>
          Além de tudo isso, você ainda recebe um pacote de
        </h2>
        <div className={styles.bonusWord}>BÔNUS</div>
        <p className={styles.body}>
          Para potencializar os resultados que terá dentro do{' '}
          <strong>FUE Ultramar.</strong>
        </p>
      </div>
    </section>
  )
}
