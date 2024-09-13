<script setup lang="ts">
import Header from '../composes/header.vue'
import Sider from '../composes/sider.vue'

</script>

<template>
	<a-layout class="h-full overflow-hidden">
		<Header></Header>
		<a-layout>
			<Sider>
			</Sider>
			<a-layout-content>
				<a-button type="primary">按钮</a-button>
				<a-input></a-input>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
