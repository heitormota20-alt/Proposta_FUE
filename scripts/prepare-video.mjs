/**
 * Converte um vídeo para all-intra (cada frame = keyframe independente).
 * Sem isso o scrub por mouse engasga porque o browser precisa reconstruir
 * o GOP inteiro a cada seek.
 *
 * Uso: node scripts/prepare-video.mjs <caminho-do-video-original>
 * Saída: public/images/<mesmo-nome>-scrub.mp4
 *
 * Requer: ffmpeg instalado e no PATH
 */

import { execSync } from 'child_process'
import { existsSync } from 'fs'
import path from 'path'

const input = process.argv[2]
if (!input) {
  console.error('Uso: node scripts/prepare-video.mjs <arquivo.mp4>')
  process.exit(1)
}

if (!existsSync(input)) {
  console.error(`Arquivo não encontrado: ${input}`)
  process.exit(1)
}

const ext      = path.extname(input)
const base     = path.basename(input, ext)
const outDir   = 'public/images'
const output   = `${outDir}/${base}-scrub${ext}`

console.log(`Convertendo: ${input}`)
console.log(`Saída:       ${output}`)
console.log('Isso pode levar alguns minutos...')

execSync(
  `ffmpeg -y -i "${input}" -vcodec libx264 -x264-params keyint=1:min-keyint=1:scenecut=0 -acodec copy "${output}"`,
  { stdio: 'inherit' },
)

console.log(`\nPronto! Use o arquivo: /${output}`)
