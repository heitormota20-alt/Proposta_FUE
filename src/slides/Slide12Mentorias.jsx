import styles from './Slide12Mentorias.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const highlight = (text) => (
  <strong style={{ color: '#15bc85', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{text}</strong>
)

const galleryItems = [
  {
    image: '/images/Slide_16/IMG_01.webp',
    label: <>{highlight('6 Fellows')} durante a sua jornada conosco.</>,
  },
  {
    image: '/images/Slide_16/IMG_02.webp',
    label: (
      <>
        O seu fellow {highlight('acontecerá em dupla')}, prezando pela proximidade e {highlight('exclusividade do programa')}.
      </>
    ),
  },
  {
    image: '/images/Slide_16/IMG_03.webp',
    label: <>{highlight('Acompanhamento de casos')}, vivência clínica e muito mais.</>,
  },
]

export const SLIDE12_STEPS = galleryItems.length

export default function Slide12Mentorias({ galleryIndex = 0, onGalleryIndexChange }) {
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
          <span className={styles.badge}>FELLOWSHIP</span>
          <h1 className={styles.title}>
            Veja tudo que está <em className={styles.accent}>incluso</em> nos seus <em className={styles.accent}>Fellows</em>
          </h1>
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
