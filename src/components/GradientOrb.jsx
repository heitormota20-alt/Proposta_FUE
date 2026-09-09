import styles from './GradientOrb.module.css'

export default function GradientOrb({ variant = 'mint', size = 600, top, left, right, bottom, opacity = 0.55 }) {
  return (
    <div
      className={`${styles.orb} ${styles[variant]}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        opacity,
      }}
      aria-hidden="true"
    />
  )
}
