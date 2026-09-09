import { useState, useCallback } from 'react'
import SlideContainer from './components/SlideContainer'
import ProgressIndicator from './components/ProgressIndicator'
import NavArrows from './components/NavArrows'

import Slide01Hero from './slides/Slide01Hero'
import Slide02Mercado from './slides/Slide02Mercado'
import Slide03Quem, { SLIDE03_STEPS } from './slides/Slide03Quem'
import Slide04Jornada from './slides/Slide04Jornada'
import Slide05Quote from './slides/Slide05Quote'
import Slide06Programa from './slides/Slide06Programa'
import Slide07Presencial, { SLIDE07_STEPS } from './slides/Slide07Presencial'
import Slide3DiasIntro from './slides/Slide_3DiasIntro'
import Slide08Dia1, { SLIDE08_STEPS } from './slides/Slide08Dia1'
import Slide09HandsOn from './slides/Slide09HandsOn'
import SlideHandsOnPratica, { SLIDE_HANDSON_STEPS } from './slides/SlideHandsOnPratica'
import SlideFelipe from './slides/Slide_Felipe'
import Slide10Fellowship from './slides/Slide10Fellowship'
import Slide11Online, { SLIDE11_STEPS } from './slides/Slide11Online'
import SlideUltClinic from './slides/Slide_UltClinic'
import SlideUltBusiness from './slides/Slide_UltBusiness'
import Slide12Mentorias, { SLIDE12_STEPS } from './slides/Slide12Mentorias'
import Slide13Estrutura, { SLIDE13_STEPS } from './slides/Slide13Estrutura'
import Slide14Bonus from './slides/Slide14Bonus'
import Slide15BonusConcierge from './slides/Slide15BonusConcierge'
import Slide16BonusAcelerador from './slides/Slide16BonusAcelerador'
import Slide17BonusWorkshop from './slides/Slide17BonusWorkshop'
import Slide18Recap from './slides/Slide18Recap'
import SlideQuantoPagaria from './slides/Slide_QuantoPagaria'
import Slide19Entregaveis from './slides/Slide19Entregaveis'
import SlideDepoimentos from './slides/Slide_Depoimentos'
import SlideMasNaoPaga from './slides/Slide_MasNaoPaga'
import Slide20Preco from './slides/Slide20Preco'
import Slide21Pagamento from './slides/Slide21Pagamento'

const SLIDES = [
  Slide01Hero,           // 01 · Hero — vídeo + tagline
  Slide02Mercado,        // 02 · Mercado — tamanho e crescimento
  Slide03Quem,           // 03 · Quem é Dr. Rafael — timeline horizontal
  Slide04Jornada,        // 04 · Jornada — R$20 Milhões
  Slide05Quote,          // 05 · Quote do Dr. Rafael
  Slide06Programa,       // 06 · O Programa — visão geral das 3 modalidades
  Slide07Presencial,     // 07 · Presencial — operar na clínica do Dr. Rafael
  Slide3DiasIntro,       // 08 · "A formação começa com 3 dias" — intro de seção
  Slide08Dia1,           // 09 · Dia 1 — Rooftop, mentoria de negócios
  Slide09HandsOn,        // 10 · Presencial · Parte 01 — Palestras exclusivas com convidados
  SlideHandsOnPratica,   // 11 · Presencial · Parte 02 — Imersão de Hands-On Prática
  SlideFelipe,           // 12 · Dr. Felipe — transformação real (Turma 1)
  Slide10Fellowship,     // 13 · Presencial · Parte 03 — Dia 2, Cirurgia No Shave
  Slide11Online,         // 14 · Presencial · Parte 03 — Hands-On com Cirurgia No Shave
  SlideUltClinic,        // 15 · Dr. Felipe — transformação real, antes/depois (Turma 1)
  SlideUltBusiness,      // 16 · Fellowship — jornada acompanhada na clínica
  Slide12Mentorias,      // 17 · Fellowship — 6 fellows, duplas, acompanhamento de casos
  Slide13Estrutura,      // 18 · Fellowship — o acesso presencial que nenhum concorrente tem
  Slide14Bonus,          // 19 · Online — plataforma, jornada completa
  Slide15BonusConcierge, // 20 · Online — plataforma, conteúdos, mockups
  Slide16BonusAcelerador,// 21 · Bônus 02 — Workshop Acelerador de Carreira
  Slide17BonusWorkshop,  // 22 · Bônus 03 — Workshop Mão na Massa
  Slide18Recap,          // 23 · Recap — "O que torna o FUE Ultramar único?"
  SlideQuantoPagaria,    // 24 · "Quanto você pagaria?" — teaser de preço
  Slide19Entregaveis,    // 25 · Entregáveis com valores — total R$173.000
  SlideDepoimentos,      // 26 · Depoimentos — o que os alunos dizem
  SlideMasNaoPaga,       // 27 · "Mas você não vai pagar esse valor…"
  Slide20Preco,          // 28 · Preço — R$173k → R$105k → R$85k
  Slide21Pagamento,      // 29 · Formas de pagamento
]

// Posição do Slide03Quem dentro de SLIDES — a seta de avançar, enquanto
// o usuário estiver aqui, primeiro revela as fotos da timeline uma a uma.
const SLIDE03_INDEX = SLIDES.indexOf(Slide03Quem)

// Slides com carrossel sanfona (AccordionGallery) — a seta de avançar,
// enquanto o usuário estiver neles, primeiro expande cada card da galeria
// antes de seguir para o próximo slide.
const GALLERY_SLIDES = [
  { Component: Slide07Presencial, steps: SLIDE07_STEPS },
  { Component: Slide08Dia1, steps: SLIDE08_STEPS },
  { Component: SlideHandsOnPratica, steps: SLIDE_HANDSON_STEPS },
  { Component: Slide11Online, steps: SLIDE11_STEPS },
  { Component: Slide12Mentorias, steps: SLIDE12_STEPS },
  { Component: Slide13Estrutura, steps: SLIDE13_STEPS },
].map((g) => ({ ...g, index: SLIDES.indexOf(g.Component) }))

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slide03Revealed, setSlide03Revealed] = useState(-1)
  const [galleryIndices, setGalleryIndices] = useState({})

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const revealSlide03 = useCallback((i) => {
    setSlide03Revealed((prev) => Math.max(prev, i))
  }, [])

  const setGalleryIndexFor = useCallback((slideIndex, value) => {
    setGalleryIndices((prev) => ({ ...prev, [slideIndex]: value }))
  }, [])

  const navigate = (direction) => {
    // No slide "Quem é o Dr. Rafael", a seta de avançar revela as fotos
    // da timeline uma por uma antes de seguir para o próximo slide.
    if (direction === 1 && currentSlide === SLIDE03_INDEX && slide03Revealed < SLIDE03_STEPS - 1) {
      setSlide03Revealed((prev) => Math.min(prev + 1, SLIDE03_STEPS - 1))
      return
    }

    // Nos slides com galeria em acordeão, a seta de avançar expande cada
    // card, um por vez, antes de seguir para o próximo slide.
    const galleryConfig = GALLERY_SLIDES.find((g) => g.index === currentSlide)
    if (direction === 1 && galleryConfig) {
      const cur = galleryIndices[currentSlide] ?? 0
      if (cur < galleryConfig.steps - 1) {
        setGalleryIndexFor(currentSlide, cur + 1)
        return
      }
    }

    const track = document.querySelector('.slides-track')
    if (!track) return
    const slides = track.querySelectorAll('.slide')
    const next = currentSlide + direction
    if (next >= 0 && next < SLIDES.length) {
      slides[next].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setCurrentSlide(next)
    }
  }

  return (
    <>
      <SlideContainer onSlideChange={handleSlideChange} onNavigate={navigate} totalSlides={SLIDES.length}>
        {SLIDES.map((SlideComponent, index) => {
          const galleryConfig = GALLERY_SLIDES.find((g) => g.index === index)
          const extraProps =
            index === SLIDE03_INDEX
              ? { revealedUpTo: slide03Revealed, onReveal: revealSlide03 }
              : galleryConfig
              ? {
                  galleryIndex: galleryIndices[index] ?? 0,
                  onGalleryIndexChange: (i) => setGalleryIndexFor(index, i),
                }
              : {}
          return <SlideComponent key={index} {...extraProps} />
        })}
      </SlideContainer>

      <ProgressIndicator current={currentSlide} total={SLIDES.length} />

      <NavArrows
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
        canPrev={currentSlide > 0}
        canNext={currentSlide < SLIDES.length - 1}
      />
    </>
  )
}
