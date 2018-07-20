<template>
	<div class="home-wrapper">
		<topbar @changeMenu="changeMenu"></topbar>
		<scroll-list top='0.9rem' bottom='0.5rem' ref="scroll" :url="url" :params="params"></scroll-list>	
	</div>
</template>
<script>
	import Topbar from './topbar/index.vue'
	import {mapGetters} from 'vuex'

	export default {
		name: 'index',
		components: {
			Topbar
		},
		computed: {
			...mapGetters(['menuList', 'menuIndex'])
		},
		data() {
			return {
				axios: null,
				params: null,
				url: 'home/list',
				params: null
			}
		},
		created() {
		},
		mounted() {
			this.params = this.menuList[this.menuIndex];
			this.$refs.scroll.loadData('home/list', this.menuList[this.menuIndex]);
		},
		methods: {
			changeMenu() {
				this.$refs.scroll.reset();
				this.params = this.menuList[this.menuIndex];
				this.$refs.scroll.loadData('home/list', this.menuList[this.menuIndex]);
			}
		}
	}
</script>
<style>
	
</style>