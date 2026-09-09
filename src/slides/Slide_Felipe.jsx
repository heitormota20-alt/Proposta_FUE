import styles from './Slide_Felipe.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function SlideFelipe() {
  return (
    <section className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <GradientBlinds
          gradientColors={['#10B981', '#10B981']}
          color1="#10B981"
          color2="#10B981"
          angle={0}
          noise={0.3}
          blindCount={28}
          blindMinWidth={22}
          spotlightRadius={0.35}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Veja como foi<br /><em className={styles.accent}>o primeiro dia</em>
          </h1>
        </div>

        <div className={styles.right}>
          <video
            className={styles.video}
            src="/images/Slide_11/IMG_6793%20(1).MOV"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  )
}
