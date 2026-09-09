import styles from './Slide_Depoimentos.module.css'
import GradientOrb from '../components/GradientOrb'

const depoimentos = [
  {
    nome: 'Dr. Felipe',
    especialidade: 'Cirurgião · Turma 1',
    texto: 'Nunca havia pego num bisturi antes do programa. Hoje realizo cirurgias com total segurança e tenho uma agenda lotada em menos de 6 meses.',
  },
  {
    nome: 'Dr. [Nome]',
    especialidade: 'Cirurgião · Turma 2',
    texto: 'O FUE Ultramar mudou completamente a minha visão de negócio. Não é só sobre técnica — é sobre construir uma clínica de verdade.',
  },
  {
    nome: 'Dr. [Nome]',
    especialidade: 'Cirurgião · Turma 3',
    texto: 'O acesso ao Dr. Rafael dentro da clínica dele não tem preço. Ver como ele opera, como ele se posiciona, isso valeu cada real investido.',
  },
]

export default function SlideDepoimentos() {
  return (
    <section className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={600} top="-15%" left="40%" opacity={0.15} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Prova social</span>
          <h2 className={styles.title}>
            O que os alunos do <em className={styles.accent}>FUE Ultramar</em> dizem
          </h2>
        </div>

        <div className={styles.cards}>
          {depoimentos.map((d, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardPhoto}>
                <span className={styles.photoLabel}>FOTO</span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>"{d.texto}"</p>
                <div className={styles.cardAuthor}>
                  <span className={styles.authorName}>{d.nome}</span>
                  <span className={styles.authorRole}>{d.especialidade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
