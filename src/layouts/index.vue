<script setup lang="ts">
import Layout1 from './wrapper/layout-1.vue'
import Layout2 from './wrapper/layout-2.vue'
import Layout3 from './wrapper/layout-3.vue'
defineOptions({
	components: {
		Layout1,
		Layout2,
		Layout3
	}
})
const configStore = useConfigStore()

</script>

<template>
	<component :is="configStore.layout"></component>
</template>
