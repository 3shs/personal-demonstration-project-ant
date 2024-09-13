<script setup lang="ts">
import Header from '../composes/header.vue'
import Sider from '../composes/sider.vue'

</script>

<template>
	<a-layout class="h-full">
		<Sider>

		</Sider>
		<a-layout>
			<Header></Header>
			<a-layout-content>

			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
