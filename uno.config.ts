import { defineConfig } from 'unocss'
import { presetWind } from 'unocss'

export default defineConfig({
    theme: {
        colors: {
            brand: '#1677ff'
        }
    },
    presets: [
        presetWind()
    ]
})