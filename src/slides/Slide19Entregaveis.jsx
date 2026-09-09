import styles from './Slide19Entregaveis.module.css'
import GradientOrb from '../components/GradientOrb'

export default function Slide19Entregaveis() {
  const items = [
    { label: 'Treinamento Presencial Hands On', value: 'R$ 38.000' },
    { label: '6 Encontros Presenciais de Fellow', value: 'R$ 90.000' },
    { label: 'Encontros AO VIVO em Grupo', value: 'R$ 12.000' },
    { label: 'Conteúdo Online Exclusivo', value: 'R$ 8.000' },
    { label: 'Concierge Pessoal', value: 'R$ 6.497', bonus: true },
    { label: 'Workshop Acelerador de Carreira', value: 'R$ 5.997', bonus: true },
    { label: 'Workshop Mão na Massa', value: 'R$ 5.997', bonus: true },
    { label: 'Biblioteca de Procedimentos Gravados', value: 'R$ 6.997', bonus: true },
    { label: 'Encontros Outside', value: 'IMENSURÁVEL', bonus: true },
    { label: 'Certificado Oficial', value: 'IMENSURÁVEL', bonus: true },
    { label: 'Comunidade de Networking', value: 'IMENSURÁVEL', bonus: true },
  ]

  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="-15%" right="-10%" opacity={0.16} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Calculando o valor de cada entregável</span>
          <h2 className={styles.title}>
            Tudo isso junto vale{' '}
            <em className={styles.accent}>mais de R$ 173.000</em>
          </h2>
        </div>

        <div className={styles.table}>
          {items.map((item, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.rowLabel}>
                {item.bonus && <span className={styles.bonusPill}>BÔNUS</span>}
                {item.label}
              </span>
              <span className={`${styles.rowValue} ${item.value === 'IMENSURÁVEL' ? styles.immeasurable : ''}`}>
                {item.value}
              </span>
            </div>
          ))}
          <div className={`${styles.row} ${styles.totalRow}`}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>+ de R$ 173.000</span>
          </div>
        </div>
      </div>
    </section>
  )
}
