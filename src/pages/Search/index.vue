<template>
	<div class="search-wrapper">
		<div class="search-head df-sb bb">
			<div class="search-input">
				<icon-svg name="2fangdajing" class="search-icon"></icon-svg>
				<input />
			</div>
			<div class="search-close">取消</div>
		</div>
		<div class="search-guess">
			<div class="tips">猜你想搜的</div>
			<ul class="search-guess-list bt">
				<li class="search-guess-item border-half">Easy-Mock</li>
				<li class="search-guess-item border-half">Easy-Mock</li>
				<li class="search-guess-item border-half">Easy-Mock</li>
				<li class="search-guess-item border-half">Easy-Mock</li>
			</ul>
		</div>
		<scroll-list></scroll-list>			
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
			background: #fff;
		    
		}

		@descendent head {
			height: 0.5rem;
		    padding: 0 0.1rem;
		}

		@descendent input {
			width: calc(100% - 0.45rem);
		    position: relative;
		    color: #666;

		    .search-icon {
		    	position: absolute;
			    left: 0.06rem;
			    top: 50%;
			    transform: translateY(-50%);
		    }

		    input {
		    	width: 100%;
			    height: 0.3rem;
			    border: none;
			    outline: none;
			    background: #f4f4f4;
			    text-indent: 0.3rem;
			    border-radius: 0.04rem;
			    font-size: 0.12rem;
			    color: #ccc;
		    }
		}

		@descendent close {
			color: #409EFF;
		}

		@descendent guess {
			.tips {
				color: #ccc;
			    line-height: 0.35rem;
			    font-size: 0.1rem;
			    padding: 0 0.1rem;
			}

			@descendent list {
				display: flex;
				flex-wrap: wrap;
			}

			@descendent item {
				width: 50%;
			    text-align: center;
			    line-height: 0.35rem;
			    font-size: 0.14rem;
			    color: #333;

				&:before {
					border-top: none;
				}

				&:nth-child(2n):before {
					border-left: none;
				}
			}
		}
	}
</style>