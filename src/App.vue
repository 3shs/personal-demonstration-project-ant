<script setup lang="ts">
const configStore = useConfigStore()

</script>

<template>
	<a-config-provider
		:theme="configStore.configProvider"
	>
		<router-view />
	</a-config-provider>
</template>
