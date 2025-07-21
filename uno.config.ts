import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [presetWind3(), presetAttributify({})],
  transformers: [transformerDirectives()],
})
