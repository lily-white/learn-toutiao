<template>
	<div class="footer df-sb fc bt">
		<router-link :to="item.path" class="footer-item" :class="{'is-active': ($route.matched[0].path || $route.matched[1].path) === item.path}" v-for="item in footerList">
			<icon-svg :name="item.icon"></icon-svg>	
			<span class="label">{{item.title}}</span>
		</router-link>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'footerBar',
		computed: {
			...mapGetters([
				'footerList'
			])
		}
	}
</script>
<style>
@import '../../styles/var.css';
	@component footer {
		background-color: #fff;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: 0.5rem;
		font-size: 0.16rem;

		@descendent item {
			flex: 1;
			text-align: center;

			@when active {
				color: $theme-red;
			}

			.icon {
				size: 0.22rem;
			}

			.label {
				display: block;
				font-size: 0.12rem;
				margin-top: 0.06rem;
			}
		}
	}
</style>