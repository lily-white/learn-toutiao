<template>
	<div class="search-wrapper mescroll">
		<div class="search-head df-sb bb">
			<div class="search-input">
				<icon-svg name="2fangdajing" class="search-icon"></icon-svg>
				<input @change="search(keyword)" v-model="keyword"/>
			</div>
			<div class="search-close" @click="$router.go(-1)">取消</div>
		</div>
		<div class="search-guess" v-show="showGuess">
			<div class="tips">猜你想搜的</div>
			<ul class="search-guess-list bt">
				<li class="search-guess-item border-half" v-for="item in keywords" @click="search(item)">{{item}}</li>
			</ul>
		</div>
		<scroll-list bottom='0' ref="scroll" :url="url" :params="params" :class="{'hidden': showGuess}"></scroll-list>	
		
	</div>
</template>
<script>
	import axios from '@/utils/fetch.js'
	import {mapGetters} from 'vuex'
	export default {
		name: 'search',
		data() {
			return {
				url: 'search',
				keywords: ['Easy-Mock', 'webpack', 'vue', 'Javascript'],
				params: null,
				showGuess: true
			}
		},
		created() {
		},
		computed: {
			keyword: {
				get() {
					return this.$store.state.search.keyword;
				},
				set(value) {
					this.$store.dispatch('updateKeyword', value);
				}
			}
		},
		methods: {
			search(keyword) {
				this.showGuess = false;
				this.keyword = keyword;
				this.params = {keyword : keyword};

				this.$refs.scroll.reset();
				this.$refs.scroll.loadData();
			}
		}
	}
</script>
<style>
.news-box {
	top: 0.5rem;
}
.news-box.hidden {
	top: 100%
}
	@component search {
		@descendent wrapper {
			width: 100%;
			background: #fff;
		    overflow: hidden;
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