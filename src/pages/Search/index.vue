<template>
	<div class="search-wrapper">
		<div class="search-head df-sb bb">
			<div class="search-input">
				<icon-svg name="search"></icon-svg>
				<input />
			</div>
			<div class="search-close">取消</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'search',
		data() {
			return {
				axios: null
			}
		},
		created() {
			this.axios = axios.get('');
		}
	}
</script>
<style>
	@component search {
		@descendent wrapper {
			width: 100%;
		    height: 0.5rem;
		    padding: 0 0.1rem;
		}

		@descendent head {

		}

		@descendent close {
			color: #409EFF;
		}
	}
</style>