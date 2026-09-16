import styles from './Slide08Dia1.module.css'
import AccordionGallery from '../components/AccordionGallery'
import GradientBlinds from '../components/GradientBlinds'

const galleryItems = [
  { image: '/images/Slide_09/IMG_01.webp', label: 'Marketing, Posicionamento e Produção de Conteúdo · Identidade e Branding no Mercado Digital' },
  { image: '/images/Slide_09/IMG_02.webp', label: 'Entrega do Kit de Onboarding Exclusivo' },
  { image: '/images/Slide_09/IMG_03.webp', label: 'Networking e Conversas com o Dr. Rafael e os outros alunos · LTV no Mercado de Transplante Capilar' },
]

export const SLIDE08_STEPS = galleryItems.length

export default function Slide08Dia1({ galleryIndex = 0, onGalleryIndexChange }) {
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

        {/* ── Cabeçalho no topo ── */}
        <div className={styles.header}>
          <span className={styles.badge}>PRESENCIAL · PARTE 01 (SEXTA-FEIRA)</span>
          <h1 className={styles.title}>
            Um rooftop fechado para{' '}
            <em className={styles.accent}>1 dia inteiro</em>
            <br />
            de mentorias sobre negócios.
          </h1>
        </div>

        {/* ── Galeria em acordeão ao centro ── */}
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
