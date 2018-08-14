<template>
	<div class="head">
		<icon-svg name="jiantou" @click.native="back($router)" class="back"></icon-svg>
		<h2>{{title}}</h2>
	</div>
</template>
<script>
	export default {
		name: 'headerBar',
		props: {
			title: {
				type: String,
				default: '今日头条'
			}
		}
	}
</script>
<style>
	@component head {
		background: #fff;
		height: 0.5rem;
        position: relative;
        
        svg {
            font-size: 0.25rem;
        }

		h2 {
			height: 100%;
            line-height: 0.5rem;
            font-size: 0.18rem;
            text-align: center;
            color: #555;
		}

		.back {
            position: absolute;
            left: 0.1rem;
            top: 50%;
            transform: translateY(-50%);
        }

	}
</style>