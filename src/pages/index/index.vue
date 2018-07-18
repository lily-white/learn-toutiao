<template>
	<div class="home-wrapper">
		<topbar></topbar>
		<scroll-list :axios="axios"></scroll-list>
	</div>
</template>
<script>
	import Topbar from './topbar/index.vue'
	import {mapGetters} from 'vuex'
	import axios from '@/utils/fetch.js'

	export default {
		name: 'index',
		components: {
			Topbar
		},
		data() {
			return {
				axios: null
			}
		},
		created() {
			this.axios = axios.get('home/list', this.menuList[this.menuIndex])
		},
		computed: {
			...mapGetters(['menuList', 'menuIndex'])
		}
	}
</script>
<style>
	
</style>