import styles from './Slide07Presencial.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const galleryItems = [
  { image: '/images/Slide_07/Imagem_03.webp', label: 'Presencial' },
  { image: '/images/Slide_07/imagem_02.webp', label: 'Online' },
  { image: '/images/Slide_07/Sem Título-1.webp', label: 'Ao vivo', imgStyle: { objectFit: 'contain' } },
]

// Total de cards da galeria — usado pelo App para saber quando parar de
// expandir e voltar a avançar de slide.
export const SLIDE07_STEPS = galleryItems.length

export default function Slide07Presencial({ galleryIndex = 0, onGalleryIndexChange }) {
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

        {/* ── Título no topo ── */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Da teoria à prática intensa,
            <br />
            tudo que um médico procura para ser
            <br />
            <em className={styles.accent}>um bom cirurgião e um bom empresário</em>, está aqui.
          </h1>
        </div>

        {/* ── Galeria em acordeão ao centro — legenda com estatística embutida ── */}
        <div className={styles.galleryWrap}>
          <AccordionGallery
            items={galleryItems}
            activeIndex={galleryIndex}
            onActiveChange={onGalleryIndexChange}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="click"
            height={440}
            gap={10}
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
