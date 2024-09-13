<script setup lang="ts">
import Menu from './menu.vue'
</script>

<template>
	<a-layout-sider
		breakpoint="lg"
    collapsed-width="0"
		class="bg-white! px-0! dark:bg-black! dark:text-white! h-full overflow-y-auto">
		<Menu></Menu>
	</a-layout-sider>
</template>
