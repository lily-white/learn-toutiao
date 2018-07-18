<template>
	<div class="header df-sb">
		<div class="header-logo fc">
			<img src="../../assets/images/logo.png">
		</div>
		<div class="header-search">
			<icon-svg name="2fangdajing" class="icon-search"></icon-svg>
			<input type="text" placeholder="搜索些啥呢..." readonly="readonly" @click="toSearch()">	
		</div>
	</div>
</template>
<script>
	export default {
		name: 'headerBar',
		methods: {
			toSearch() {
				this.$router.push('/search');
			}
		}
	}
</script>
<style>
@import '../../styles/var.css';
	@component header{
		height: 0.5rem;
    	background: $theme-bg-red;

    	@descendent logo{
    		width: 1.3rem;
    		height: 100%;

    		img {
    			width: 1rem;
    		}
    	}

    	@descendent search {
    		width: calc(100% - 1.3rem);
		    position: relative;
		    color: $font-gray;

		    .icon-search {
		    	position: absolute;
		    	top: 50%;
		    	left: 0.06rem;
		    	transform: translateY(-50%);
		    }

		    input {
		    	width: 90%;
			    height: 0.3rem;
			    border: none;
			    outline: none;
			    background: $bg-color;
			    text-indent: 0.3rem;
			    border-radius: 0.04rem;
		    }
    	}
	}
	
</style>