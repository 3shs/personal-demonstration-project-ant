import { defineConfig } from 'unocss'
import { presetWind } from 'unocss'

export default defineConfig({
	theme: {
		colors: {
			brand: '#1677ff',
			darkBorder: '#fdfdfd1f',
			darkText: 'rgba(255, 255, 255, 0.85)'
		}
	},
	presets: [
		presetWind()
	]
})
