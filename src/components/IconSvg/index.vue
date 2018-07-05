<template>
	<svg aria-hidden="true" class="icon">
		<use :xlink:href="iconName"></use>
	</svg>
</template>
<script>
	export default {
		name: 'icon-svg',
		props: {
			name: String,
			required: true
		},
		computed: {
			iconName() {
				return `#icon-${this.name}`;
			}
		}
	}
</script>
<style>
	
</style>