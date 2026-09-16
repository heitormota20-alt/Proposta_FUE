import styles from './Slide13Estrutura.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const topicImages = [
  '/images/Slide_17/Img-01.webp',
  '/images/Slide_17/Img-02.webp',
  '/images/Slide_17/Img-03.webp',
  '/images/Slide_17/Img-04.webp',
  '/images/Slide_17/Img-05.webp',
]

const galleryItems = [
  { image: topicImages[0], label: 'Acompanhamento integral de cirurgias reais' },
  { image: topicImages[1], label: 'Organização e estruturação de uma equipe cirúrgica eficiente' },
  { image: topicImages[2], label: 'Revisão detalhada dos procedimentos executados' },
  { image: topicImages[3], label: 'Direcionamento contínuo sobre postura, técnica e abordagem clínica' },
  { image: topicImages[4], label: 'Execução supervisionada de técnicas do transplante capilar' },
]

export const SLIDE13_STEPS = galleryItems.length

export default function Slide13Estrutura({ galleryIndex = 0, onGalleryIndexChange }) {
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
          <span className={styles.badge}>E que nenhum concorrente tem</span>
          <h1 className={styles.title}>O acesso <em className={styles.accent}>presencial</em> que você procura</h1>
        </div>

        <div className={styles.galleryWrap}>
          <AccordionGallery
            items={galleryItems}
            activeIndex={galleryIndex}
            onActiveChange={onGalleryIndexChange}
            defaultIndex={0}
            expandRatio={0.42}
            trigger="click"
            height={460}
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
