import { useState, useCallback } from 'react'
import SlideContainer from './components/SlideContainer'
import ProgressIndicator from './components/ProgressIndicator'
import NavArrows from './components/NavArrows'

import Slide01Hero from './slides/Slide01Hero'
import Slide02Mercado, { SLIDE02_STEPS } from './slides/Slide02Mercado'
import Slide03Quem, { SLIDE03_STEPS } from './slides/Slide03Quem'
import Slide04Jornada from './slides/Slide04Jornada'
import Slide05Quote from './slides/Slide05Quote'
import Slide06Programa, { SLIDE06_STEPS } from './slides/Slide06Programa'
import Slide07Presencial, { SLIDE07_STEPS } from './slides/Slide07Presencial'
import Slide3DiasIntro from './slides/Slide_3DiasIntro'
import Slide08Dia1, { SLIDE08_STEPS } from './slides/Slide08Dia1'
import Slide09HandsOn from './slides/Slide09HandsOn'
import SlideHandsOnPratica, { SLIDE_HANDSON_STEPS } from './slides/SlideHandsOnPratica'
import SlideFelipe from './slides/Slide_Felipe'
import Slide10Fellowship from './slides/Slide10Fellowship'
import Slide11Online, { SLIDE11_STEPS } from './slides/Slide11Online'
import Slide15HandsOn, { SLIDE15_STEPS } from './slides/Slide15HandsOn'
import SlideUltClinic from './slides/Slide_UltClinic'
import SlideUltBusiness from './slides/Slide_UltBusiness'
import Slide12Mentorias, { SLIDE12_STEPS } from './slides/Slide12Mentorias'
import Slide13Estrutura, { SLIDE13_STEPS } from './slides/Slide13Estrutura'
import Slide14Bonus, { SLIDE14_STEPS } from './slides/Slide14Bonus'
import Slide15BonusConcierge, { SLIDE_CONCIERGE_STEPS } from './slides/Slide15BonusConcierge'
import Slide16BonusAcelerador, { SLIDE16_STEPS } from './slides/Slide16BonusAcelerador'
import Slide17BonusWorkshop, { SLIDE17_STEPS } from './slides/Slide17BonusWorkshop'
import Slide18Recap from './slides/Slide18Recap'
import Slide32Entregaveis, { SLIDE32_STEPS } from './slides/Slide32Entregaveis'
import SlideQuantoPagaria, { SLIDE_QUANTOPAGARIA_STEPS } from './slides/Slide_QuantoPagaria'
import Slide19Entregaveis from './slides/Slide19Entregaveis'
import SlideDepoimentos from './slides/Slide_Depoimentos'
import SlideMasNaoPaga from './slides/Slide_MasNaoPaga'
import Slide20Preco from './slides/Slide20Preco'
import Slide21Pagamento from './slides/Slide21Pagamento'
import Slide22UltramarBusiness from './slides/Slide22UltramarBusiness'
import Slide23UltramarClinic from './slides/Slide23UltramarClinic'
import Slide24Mentoria from './slides/Slide24Mentoria'
import Slide25MentoriaAoVivo from './slides/Slide25MentoriaAoVivo'
import Slide26Estrutura, { SLIDE26_STEPS } from './slides/Slide26Estrutura'
import Slide27NaoAcaba, { SLIDE27_STEPS } from './slides/Slide27NaoAcaba'
import Slide28Concierge, { SLIDE28_STEPS } from './slides/Slide28Concierge'

const SLIDES = [
  Slide01Hero,           // 01 · Hero — vídeo + tagline
  Slide02Mercado,        // 02 · Mercado — tamanho e crescimento
  Slide03Quem,           // 03 · Quem é Dr. Rafael — timeline horizontal
  Slide04Jornada,        // 04 · Jornada — R$20 Milhões
  Slide05Quote,          // 05 · Quote do Dr. Rafael
  Slide06Programa,       // 06 · O Programa — visão geral das 3 modalidades
  Slide07Presencial,     // 07 · Presencial — operar na clínica do Dr. Rafael
  Slide3DiasIntro,       // 08 · "A formação começa com 3 dias" — intro de seção
  Slide09HandsOn,        // 09 · Presencial · Parte 01 — Palestras exclusivas com convidados
  Slide08Dia1,           // 10 · Dia 1 — Rooftop, mentoria de negócios
  SlideHandsOnPratica,   // 11 · Presencial · Parte 02 — Imersão de Hands-On Prática
  SlideFelipe,           // 12 · Dr. Felipe — transformação real (Turma 1)
  Slide10Fellowship,     // 13 · Presencial · Parte 03 — Dia 2, Cirurgia No Shave
  Slide11Online,         // 14 · Presencial · Parte 02 — Hands-On com Cirurgia com Raspagem
  Slide15HandsOn,        // 15 · Presencial · Parte 03 — Hands-On com Cirurgia com Raspagem
  SlideUltClinic,        // 16 · Dr. Felipe — transformação real, antes/depois (Turma 1)
  SlideUltBusiness,      // 16 · Fellowship — jornada acompanhada na clínica
  Slide12Mentorias,      // 17 · Fellowship — 6 fellows, duplas, acompanhamento de casos
  Slide13Estrutura,      // 18 · Fellowship — o acesso presencial que nenhum concorrente tem
  Slide14Bonus,          // 19 · Online — plataforma, jornada completa
  Slide15BonusConcierge, // 20 · Online — plataforma, conteúdos, mockups
  Slide22UltramarBusiness, // 21 · Master Business — Ultramar Business, visão de negócios do Dr. Rafael
  Slide23UltramarClinic, // 22 · Master Clinic — Ultramar Clinic, metodologia de aceleração clínica
  Slide24Mentoria,       // 23 · Mentoria — encontros ao vivo no Zoom
  Slide25MentoriaAoVivo, // 24 · Mentorias ao vivo durante 4 meses
  Slide26Estrutura,      // 25 · Estrutura da formação — 4 bullets com ícone
  Slide27NaoAcaba,       // 26 · "Mas não acaba aqui" — teaser dos bônus
  Slide28Concierge,      // 27 · Bônus 01 — Concierge Pessoal
  Slide16BonusAcelerador,// 28 · Bônus 02 — Workshop Acelerador de Carreira
  Slide17BonusWorkshop,  // 22 · Bônus 03 — Workshop Mão na Massa
  Slide18Recap,          // 23 · Recap — "O que torna o FUE Ultramar único?"
  Slide32Entregaveis,    // 24 · Recap — entregáveis em quadrados com ícone
  SlideQuantoPagaria,    // 24 · "Quanto você pagaria?" — teaser de preço
  Slide19Entregaveis,    // 25 · Entregáveis com valores — total R$173.000
  SlideDepoimentos,      // 26 · Depoimentos — o que os alunos dizem
  SlideMasNaoPaga,       // 27 · "Mas você não vai pagar esse valor…"
  Slide20Preco,          // 28 · Preço — R$173k → R$105k → R$85k
  Slide21Pagamento,      // 29 · Formas de pagamento
]

// Posições dos slides com reveal progressivo.
const SLIDE02_INDEX = SLIDES.indexOf(Slide02Mercado)
const SLIDE03_INDEX = SLIDES.indexOf(Slide03Quem)
const SLIDE06_INDEX = SLIDES.indexOf(Slide06Programa)
const SLIDE14_INDEX = SLIDES.indexOf(Slide14Bonus)
const SLIDE_CONCIERGE_INDEX = SLIDES.indexOf(Slide15BonusConcierge)
const SLIDE26_INDEX = SLIDES.indexOf(Slide26Estrutura)
const SLIDE27_INDEX = SLIDES.indexOf(Slide27NaoAcaba)
const SLIDE28_INDEX = SLIDES.indexOf(Slide28Concierge)
const SLIDE16_INDEX = SLIDES.indexOf(Slide16BonusAcelerador)
const SLIDE17_INDEX = SLIDES.indexOf(Slide17BonusWorkshop)
const SLIDE32_INDEX = SLIDES.indexOf(Slide32Entregaveis)
const SLIDE_QUANTOPAGARIA_INDEX = SLIDES.indexOf(SlideQuantoPagaria)

// Slides com carrossel sanfona (AccordionGallery) — a seta de avançar,
// enquanto o usuário estiver neles, primeiro expande cada card da galeria
// antes de seguir para o próximo slide.
const GALLERY_SLIDES = [
  { Component: Slide07Presencial, steps: SLIDE07_STEPS },
  { Component: Slide08Dia1, steps: SLIDE08_STEPS },
  { Component: SlideHandsOnPratica, steps: SLIDE_HANDSON_STEPS },
  { Component: Slide11Online, steps: SLIDE11_STEPS },
  { Component: Slide15HandsOn, steps: SLIDE15_STEPS },
  { Component: Slide12Mentorias, steps: SLIDE12_STEPS },
  { Component: Slide13Estrutura, steps: SLIDE13_STEPS },
].map((g) => ({ ...g, index: SLIDES.indexOf(g.Component) }))

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slide02Revealed, setSlide02Revealed] = useState(-1)
  const [slide03Revealed, setSlide03Revealed] = useState(-1)
  const [slide06Revealed, setSlide06Revealed] = useState(-1)
  const [slide14Revealed, setSlide14Revealed] = useState(-1)
  const [slideConciergeRevealed, setSlideConciergeRevealed] = useState(-1)
  const [slide26Revealed, setSlide26Revealed] = useState(-1)
  const [slide27Revealed, setSlide27Revealed] = useState(-1)
  const [slide28Revealed, setSlide28Revealed] = useState(-1)
  const [slide16Revealed, setSlide16Revealed] = useState(-1)
  const [slide17Revealed, setSlide17Revealed] = useState(-1)
  const [slide32Revealed, setSlide32Revealed] = useState(-1)
  const [slideQuantoPagariaRevealed, setSlideQuantoPagariaRevealed] = useState(-1)
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
    // Slide06: avançar revela bullets um a um; recuar oculta um a um.
    if (currentSlide === SLIDE06_INDEX) {
      if (direction === 1 && slide06Revealed < SLIDE06_STEPS - 1) {
        setSlide06Revealed((prev) => Math.min(prev + 1, SLIDE06_STEPS - 1))
        return
      }
      if (direction === -1 && slide06Revealed >= 0) {
        setSlide06Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide Concierge: avançar revela bullets um a um; recuar oculta um a um.
    if (currentSlide === SLIDE_CONCIERGE_INDEX) {
      if (direction === 1 && slideConciergeRevealed < SLIDE_CONCIERGE_STEPS - 1) {
        setSlideConciergeRevealed((prev) => Math.min(prev + 1, SLIDE_CONCIERGE_STEPS - 1))
        return
      }
      if (direction === -1 && slideConciergeRevealed >= 0) {
        setSlideConciergeRevealed((prev) => prev - 1)
        return
      }
    }

    // Slide26: avançar revela bullets um a um (esquerda→direita); recuar oculta um a um.
    if (currentSlide === SLIDE26_INDEX) {
      if (direction === 1 && slide26Revealed < SLIDE26_STEPS - 1) {
        setSlide26Revealed((prev) => Math.min(prev + 1, SLIDE26_STEPS - 1))
        return
      }
      if (direction === -1 && slide26Revealed >= 0) {
        setSlide26Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide27: avançar revela palavras uma a uma; recuar oculta uma a uma.
    if (currentSlide === SLIDE27_INDEX) {
      if (direction === 1 && slide27Revealed < SLIDE27_STEPS - 1) {
        setSlide27Revealed((prev) => Math.min(prev + 1, SLIDE27_STEPS - 1))
        return
      }
      if (direction === -1 && slide27Revealed >= 0) {
        setSlide27Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide28: avançar revela bullets um a um; recuar oculta um a um.
    if (currentSlide === SLIDE28_INDEX) {
      if (direction === 1 && slide28Revealed < SLIDE28_STEPS - 1) {
        setSlide28Revealed((prev) => Math.min(prev + 1, SLIDE28_STEPS - 1))
        return
      }
      if (direction === -1 && slide28Revealed >= 0) {
        setSlide28Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide16 (Bônus 02): avançar revela bullets um a um; recuar oculta um a um.
    if (currentSlide === SLIDE16_INDEX) {
      if (direction === 1 && slide16Revealed < SLIDE16_STEPS - 1) {
        setSlide16Revealed((prev) => Math.min(prev + 1, SLIDE16_STEPS - 1))
        return
      }
      if (direction === -1 && slide16Revealed >= 0) {
        setSlide16Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide17 (Bônus 03): avançar revela bullets um a um; recuar oculta um a um.
    if (currentSlide === SLIDE17_INDEX) {
      if (direction === 1 && slide17Revealed < SLIDE17_STEPS - 1) {
        setSlide17Revealed((prev) => Math.min(prev + 1, SLIDE17_STEPS - 1))
        return
      }
      if (direction === -1 && slide17Revealed >= 0) {
        setSlide17Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide32 (Entregáveis): avançar revela quadrados um a um; recuar oculta um a um.
    if (currentSlide === SLIDE32_INDEX) {
      if (direction === 1 && slide32Revealed < SLIDE32_STEPS - 1) {
        setSlide32Revealed((prev) => Math.min(prev + 1, SLIDE32_STEPS - 1))
        return
      }
      if (direction === -1 && slide32Revealed >= 0) {
        setSlide32Revealed((prev) => prev - 1)
        return
      }
    }

    // SlideQuantoPagaria: avançar revela os textos um a um; recuar oculta um a um.
    if (currentSlide === SLIDE_QUANTOPAGARIA_INDEX) {
      if (direction === 1 && slideQuantoPagariaRevealed < SLIDE_QUANTOPAGARIA_STEPS - 1) {
        setSlideQuantoPagariaRevealed((prev) => Math.min(prev + 1, SLIDE_QUANTOPAGARIA_STEPS - 1))
        return
      }
      if (direction === -1 && slideQuantoPagariaRevealed >= 0) {
        setSlideQuantoPagariaRevealed((prev) => prev - 1)
        return
      }
    }

    // Slide14: avançar revela pills um a um; recuar oculta um a um.
    if (currentSlide === SLIDE14_INDEX) {
      if (direction === 1 && slide14Revealed < SLIDE14_STEPS - 1) {
        setSlide14Revealed((prev) => Math.min(prev + 1, SLIDE14_STEPS - 1))
        return
      }
      if (direction === -1 && slide14Revealed >= 0) {
        setSlide14Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide02: avançar revela big numbers um a um; recuar oculta um a um.
    if (currentSlide === SLIDE02_INDEX) {
      if (direction === 1 && slide02Revealed < SLIDE02_STEPS - 1) {
        setSlide02Revealed((prev) => Math.min(prev + 1, SLIDE02_STEPS - 1))
        return
      }
      if (direction === -1 && slide02Revealed >= 0) {
        setSlide02Revealed((prev) => prev - 1)
        return
      }
    }

    // Slide03: avançar revela fotos uma a uma; recuar oculta uma a uma.
    if (currentSlide === SLIDE03_INDEX) {
      if (direction === 1 && slide03Revealed < SLIDE03_STEPS - 1) {
        setSlide03Revealed((prev) => Math.min(prev + 1, SLIDE03_STEPS - 1))
        return
      }
      if (direction === -1 && slide03Revealed >= 0) {
        setSlide03Revealed((prev) => prev - 1)
        return
      }
    }

    // Slides com galeria em acordeão: avançar expande um card por vez;
    // recuar fecha um card por vez, antes de ir ao slide anterior.
    const galleryConfig = GALLERY_SLIDES.find((g) => g.index === currentSlide)
    if (galleryConfig) {
      const cur = galleryIndices[currentSlide] ?? 0
      if (direction === 1 && cur < galleryConfig.steps - 1) {
        setGalleryIndexFor(currentSlide, cur + 1)
        return
      }
      if (direction === -1 && cur > 0) {
        setGalleryIndexFor(currentSlide, cur - 1)
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
            index === SLIDE06_INDEX
              ? { revealedUpTo: slide06Revealed }
              : index === SLIDE02_INDEX
              ? { revealedUpTo: slide02Revealed }
              : index === SLIDE03_INDEX
              ? { revealedUpTo: slide03Revealed, onReveal: revealSlide03 }
              : index === SLIDE14_INDEX
              ? { revealedUpTo: slide14Revealed }
              : index === SLIDE_CONCIERGE_INDEX
              ? { revealedUpTo: slideConciergeRevealed }
              : index === SLIDE26_INDEX
              ? { revealedUpTo: slide26Revealed }
              : index === SLIDE27_INDEX
              ? { revealedUpTo: slide27Revealed }
              : index === SLIDE28_INDEX
              ? { revealedUpTo: slide28Revealed }
              : index === SLIDE16_INDEX
              ? { revealedUpTo: slide16Revealed }
              : index === SLIDE17_INDEX
              ? { revealedUpTo: slide17Revealed }
              : index === SLIDE32_INDEX
              ? { revealedUpTo: slide32Revealed }
              : index === SLIDE_QUANTOPAGARIA_INDEX
              ? { revealedUpTo: slideQuantoPagariaRevealed }
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
