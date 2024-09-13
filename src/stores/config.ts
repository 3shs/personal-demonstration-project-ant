import { theme as antTheme } from 'ant-design-vue'

type Theme = 'light' | 'dark'
export const useConfigStore = defineStore('config', () => {

	const brandColor = ref<string>('#00b96b')
  const layout = ref<string>('Layout1')
  const theme = ref<Theme>('light')

	const configProvider = computed(() => {
		return {
			token: {
				colorPrimary: brandColor.value
			},
			algorithm: theme.value === 'light' ? antTheme.defaultAlgorithm : antTheme.darkAlgorithm
		}
	})


	watch(() => theme.value, (newTheme, oldTheme) => {
		document.documentElement.classList.remove(oldTheme as string)
    document.documentElement.classList.add(newTheme)
	})

  return {
		layout,
		theme,
		configProvider
	}
})
