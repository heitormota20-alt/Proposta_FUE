import styles from './Slide11Online.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const galleryItems = [
  { image: '/images/Slide_13/img-01.webp', label: 'Treinamento com Equipe Cirúrgica' },
  { image: '/images/Slide_13/img-02.webp', label: 'Participação em Transplantes Reais' },
  { image: '/images/Slide_13/img-03.webp', label: 'Aplicação de Técnicas em Tempos Cirúrgicos' },
  { image: '/images/Slide_13/img-04.webp', label: 'Hands-On guiado pelos Mentores' },
]

export const SLIDE11_STEPS = galleryItems.length

export default function Slide11Online({ galleryIndex = 0, onGalleryIndexChange }) {
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

        <div className={styles.header}>
          <span className={styles.badge}>PRESENCIAL · PARTE 02 (SÁBADO)</span>
          <h1 className={styles.title}>Hands-On com Cirurgia <em className={styles.accent}>com Raspagem</em></h1>
        </div>

        <div className={styles.galleryWrap}>
          <AccordionGallery
            items={galleryItems}
            activeIndex={galleryIndex}
            onActiveChange={onGalleryIndexChange}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="click"
            height={460}
            gap={10}
            radius={16}
            accentColor="#15bc85"
            overlayColor="#060010"
            textColor="#ffffff"
            labelStyle={{
              fontSize: 'clamp(0.7rem, 0.85vw, 0.875rem)',
              textTransform: 'none',
              letterSpacing: '0.01em',
              lineHeight: '1.45',
              textWrap: 'pretty',
            }}
          />
        </div>

      </div>
    </section>
  )
}
