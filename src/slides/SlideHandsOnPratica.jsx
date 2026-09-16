import styles from './SlideHandsOnPratica.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const galleryItems = [
  { image: '/images/Slide_10/img-01.webp', tagline: 'Dr. Rafael Ultramar', label: 'Identidade e Branding' },
  { image: '/images/Slide_10/img-02.webp', tagline: 'Guto Galamba',         label: 'Produção de Conteúdo' },
  { image: '/images/Slide_10/img-03.webp', tagline: 'Daniel Lara',          label: 'Marketing e Conversão' },
  { image: '/images/Slide_10/img-04.webp', tagline: 'Filippe Holze',        label: 'Mercado Digital de Forma Estratégica' },
  { image: '/images/Slide_10/img-05.webp', tagline: 'Dra. Priscila Barreto',  label: 'LTV no Mercado de Transplante Capilar' },
  { image: '/images/Slide_10/img-06.webp', tagline: 'Dr. Rafael Ultramar',   label: 'Encantamento do Cliente' },
  { image: '/images/Slide_10/img-07.webp', tagline: 'Dr. Rafael Ultramar',   label: 'Técnica + Planejamento Cirúrgico' },
]

export const SLIDE_HANDSON_STEPS = galleryItems.length

export default function SlideHandsOnPratica({ galleryIndex = 0, onGalleryIndexChange }) {
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
          <span className={styles.badge}>PRESENCIAL · PARTE 01</span>
          <h1 className={styles.title}>
            Veja alguns <em className={styles.accent}>palestrantes</em> que já passaram pelo FUE
          </h1>
        </div>

        <div className={styles.galleryWrap}>
          <AccordionGallery
            items={galleryItems}
            activeIndex={galleryIndex}
            onActiveChange={onGalleryIndexChange}
            defaultIndex={0}
            expandRatio={0.72}
            trigger="click"
            height={580}
            gap={8}
            radius={16}
            accentColor="#15bc85"
            overlayColor="#060010"
            textColor="#ffffff"
            labelStyle={{
              fontSize: 'clamp(0.95rem, 0.85vw, 1.125rem)',
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
