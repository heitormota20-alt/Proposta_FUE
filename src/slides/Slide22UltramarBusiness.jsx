import styles from './Slide22UltramarBusiness.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'
import ParallaxGallery from '../components/ParallaxGallery'

const MODULES = ['MODULO-01', 'MODULO-02', 'MODULO-03', 'MODULO-04', 'MODULO-05', 'WORKSHOP-BONUS']

const GALLERY_IMAGES = MODULES.map(
  (n) => `/images/Jornada Business/[DRRAFAEL-FUE-ULTRA][${n}][400x600].png`
)

export default function Slide22UltramarBusiness() {
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
          <span className={styles.eyebrow}>Master Business</span>
          <h1 className={styles.title}>
            Conteúdos elaborados<br />
            para te <em className={styles.accent}>transformar</em> em<br />
            um profissional de ponta.
          </h1>
          <p className={styles.sub}>
            <strong className={styles.subStrong}>Ultramar Business</strong> — a visão do Dr. Rafael Ultramar sobre negócios e o passo a passo de como ele saiu do absoluto zero para uma clínica que faturou mais de{' '}
            <strong className={styles.subStrong}>R$15 milhões de reais</strong> no último ano.
          </p>
        </div>
      </div>
    </section>
  )
}
