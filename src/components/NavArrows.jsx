import styles from './NavArrows.module.css'

export default function NavArrows({ onPrev, onNext, canPrev, canNext }) {
  return (
    <>
      {canPrev && (
        <button className={`${styles.arrow} ${styles.left}`} onClick={onPrev} aria-label="Slide anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      {canNext && (
        <button className={`${styles.arrow} ${styles.right}`} onClick={onNext} aria-label="Próximo slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </>
  )
}
