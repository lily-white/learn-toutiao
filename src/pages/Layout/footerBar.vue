<template>
	<div class="footer df-sb fc bt">
		<router-link to="/" class="footer-item is-active">
			<icon-svg name="home"></icon-svg>	
			<span class="label">首页</span>
		</router-link>	
		<router-link to="/video" class="footer-item">
			<icon-svg name="video"></icon-svg>	
			<span class="label">西瓜视频</span>
		</router-link>	
		<router-link to="/video" class="footer-item">
			<icon-svg name="comment"></icon-svg>	
			<span class="label">微头条</span>
		</router-link>	
		<router-link to="/video" class="footer-item">
			<icon-svg name="account"></icon-svg>	
			<span class="label">我的</span>
		</router-link>	
	</div>
</template>
<script>
	export default {
		name: 'footerBar'
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