import styles from './Slide23UltramarClinic.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'
import ParallaxGallery from '../components/ParallaxGallery'

const MODULES = ['01', '02', '3A', '3B', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const GALLERY_IMAGES = MODULES.map(
  (n) => `/images/Jornada Clinic/[DRRAFAEL-FUE-ULTRA][MODULO-${n}][400x600].webp`
)

export default function Slide23UltramarClinic() {
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
      <GradientOrb variant="teal" size={700} top="-10%" left="-15%" opacity={0.18} />

      {/* Galeria sangrando até as bordas reais do slide (topo/direita/rodapé),
          fora da área com padding — por isso fica fora do .inner. */}
      <div className={styles.galleryBleed}>
        <ParallaxGallery images={GALLERY_IMAGES} columnCount={3} />
      </div>

      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Master Clinic</span>
          <h1 className={styles.title}>
            Conteúdos elaborados<br />
            para te <em className={styles.accent}>transformar</em> em<br />
            um profissional de ponta.
          </h1>
          <p className={styles.sub}>
            <strong className={styles.subStrong}>Ultramar Clinic</strong> — metodologia de aceleração clínica para médicos que querem dominar as melhores técnicas de cirurgia para transplante capilar.
          </p>
        </div>
      </div>
    </section>
  )
}
