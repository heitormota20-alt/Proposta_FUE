import { motion } from 'framer-motion'
import styles from './ParallaxGallery.module.css'

// Grade de imagens em 3D estático (perspectiva fixa), com cada coluna
// deslizando em loop infinito e velocidade/direção própria — dá vida ao
// painel sem depender de scroll (o deck navega por slide, não por scroll
// vertical dentro do slide).
function Column({ images, duration, reverse }) {
  // Repete a lista o bastante para a coluna nunca "acabar" antes do fim do
  // container (isso cortava a imagem no rodapé quando havia poucas fotos).
  // O loop precisa de duas metades IDÊNTICAS para ficar contínuo (anima de
  // 0% a -50%), então repetimos o material dentro de cada metade.
  const base = Array.from({ length: 3 }).flatMap(() => images)
  const seq = [...base, ...base]
  return (
    <div className={styles.column}>
      <motion.div
        className={styles.columnInner}
        animate={{ y: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {seq.map((src, i) => (
          <div key={i} className={styles.card}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function ParallaxGallery({ images, columnCount = 3 }) {
  const columns = Array.from({ length: columnCount }, () => [])
  images.forEach((src, i) => columns[i % columnCount].push(src))

  const durations = [38, 46, 34, 42]

  return (
    <div className={styles.stage}>
      <div className={styles.matrix}>
        {columns.map((col, i) => (
          <Column
            key={i}
            images={col}
            duration={durations[i % durations.length]}
            reverse={i % 2 === 1}
          />
        ))}
      </div>

      {/* Máscara de sombra nas bordas — funde o painel com o fundo */}
      <div className={styles.maskY} aria-hidden="true" />
      <div className={styles.maskX} aria-hidden="true" />
    </div>
  )
}
