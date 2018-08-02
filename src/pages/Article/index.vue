<template>
	<div class="article-wrapper">
		article
	</div>
</template>
<script>
	export default {
		name: 'article',
		created() {
			console.log(this.$route.params.articleId)
		}
	}
</script>
<style>
@component-namespace article {
	@component wrapper {
		padding: 0 0.1rem;
	}
}
</style>