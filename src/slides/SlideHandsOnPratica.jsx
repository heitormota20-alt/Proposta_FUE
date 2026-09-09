import styles from './SlideHandsOnPratica.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const galleryItems = [
  { image: '/images/Slide_10/img-01.jpg', label: 'Identidade e Branding' },
  { image: '/images/Slide_10/img-02.jpg', label: 'Produção de Conteúdo' },
  { image: '/images/Slide_10/img-03.jpg', label: 'Marketing e Conversão' },
  { image: '/images/Slide_10/img-04.jpg', label: 'Mercado Digital de Forma Estratégica' },
  { image: '/images/Slide_10/img-05.jpg', label: 'LTV no Mercado de Transplante Capilar' },
  { image: '/images/Slide_10/img-06.jpg', label: 'Encantamento do Cliente' },
  { image: '/images/Slide_10/img-07.jpg', label: 'Técnica + Planejamento Cirúrgico' },
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
          <span className={styles.badge}>PRESENCIAL · PARTE 02</span>
          <h1 className={styles.title}>
            Imersão de <em className={styles.accent}>Hands-On</em> Prática
          </h1>
          <p className={styles.sub}>3 dias de treinamento intensivo na clínica do Dr. Rafael Ultramar.</p>
        </div>

        <div className={styles.galleryWrap}>
          <AccordionGallery
            items={galleryItems}
            activeIndex={galleryIndex}
            onActiveChange={onGalleryIndexChange}
            defaultIndex={0}
            expandRatio={0.72}
            trigger="hover"
            height={580}
            gap={8}
            radius={16}
            accentColor="#15bc85"
            overlayColor="#060010"
            textColor="#ffffff"
          />
        </div>

      </div>
    </section>
  )
}
