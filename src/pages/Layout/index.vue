<template>
	<div>
		<headerBar></headerBar>
		<router-view class="main"></router-view>	
		<footerBar></footerBar>
	</div>
</template>
<script>
import {headerBar, footerBar} from './index.js'
	export default {
		name: 'layout',
		components: {
			headerBar,
			footerBar
		}
	}
</script>
<style>
.main {
	width: 100%;
	height: calc(100% - 1rem);
}
	
</style>k