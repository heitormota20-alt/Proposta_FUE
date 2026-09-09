import { useState, useCallback } from 'react'
import SlideContainer from './components/SlideContainer'
import ProgressIndicator from './components/ProgressIndicator'
import NavArrows from './components/NavArrows'

import Slide01Hero from './slides/Slide01Hero'
import Slide02Mercado from './slides/Slide02Mercado'
import Slide03Quem from './slides/Slide03Quem'
import Slide04Jornada from './slides/Slide04Jornada'
import Slide05Quote from './slides/Slide05Quote'
import Slide06Programa from './slides/Slide06Programa'
import Slide07Presencial from './slides/Slide07Presencial'
import Slide3DiasIntro from './slides/Slide_3DiasIntro'
import Slide08Dia1 from './slides/Slide08Dia1'
import Slide09HandsOn from './slides/Slide09HandsOn'
import SlideFelipe from './slides/Slide_Felipe'
import Slide10Fellowship from './slides/Slide10Fellowship'
import Slide11Online from './slides/Slide11Online'
import SlideUltClinic from './slides/Slide_UltClinic'
import SlideUltBusiness from './slides/Slide_UltBusiness'
import Slide12Mentorias from './slides/Slide12Mentorias'
import Slide13Estrutura from './slides/Slide13Estrutura'
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
  Slide09HandsOn,        // 10 · Hands-On — dias 1, 2 e 3
  SlideFelipe,           // 11 · Dr. Felipe — transformação real (Turma 1)
  Slide10Fellowship,     // 12 · Fellowship — jornada acompanhada na clínica
  Slide11Online,         // 13 · Online — plataforma + 2 trilhas
  SlideUltClinic,        // 14 · Ultramar Clinic — trilha de técnica cirúrgica
  SlideUltBusiness,      // 15 · Ultramar Business — trilha de gestão e negócios
  Slide12Mentorias,      // 16 · Mentorias AO VIVO — encontros quinzenais
  Slide13Estrutura,      // 17 · Estrutura completa da formação
  Slide14Bonus,          // 18 · Bônus — intro "não acaba aqui"
  Slide15BonusConcierge, // 19 · Bônus 01 — Concierge Pessoal
  Slide16BonusAcelerador,// 20 · Bônus 02 — Workshop Acelerador de Carreira
  Slide17BonusWorkshop,  // 21 · Bônus 03 — Workshop Mão na Massa
  Slide18Recap,          // 22 · Recap — "O que torna o FUE Ultramar único?"
  SlideQuantoPagaria,    // 23 · "Quanto você pagaria?" — teaser de preço
  Slide19Entregaveis,    // 24 · Entregáveis com valores — total R$173.000
  SlideDepoimentos,      // 25 · Depoimentos — o que os alunos dizem
  SlideMasNaoPaga,       // 26 · "Mas você não vai pagar esse valor…"
  Slide20Preco,          // 27 · Preço — R$173k → R$105k → R$85k
  Slide21Pagamento,      // 28 · Formas de pagamento
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const navigate = (direction) => {
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
      <SlideContainer onSlideChange={handleSlideChange} totalSlides={SLIDES.length}>
        {SLIDES.map((SlideComponent, index) => (
          <SlideComponent key={index} />
        ))}
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
