<script setup lang="ts">
const configStore = useConfigStore()
</script>

<template>
	<a-layout-header class="bg-white! px-0! dark:bg-black! dark:text-dark-text!">
		<a-space>
			<a-switch
				v-model:checked="configStore.theme"
				checked-children="暗"
				un-checked-children="亮"
				checkedValue="dark"
				unCheckedValue="light"
			/>
			<a-select
				v-model:value="configStore.layout"
				:options="[
					{label: '布局一', value: 'Layout1'},
					{label: '布局二', value: 'Layout2'},
					{label: '布局三', value: 'Layout3'},
				]"
			>

			</a-select>
			111
		</a-space>
	</a-layout-header>
</template>
