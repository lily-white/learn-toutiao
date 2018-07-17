<template>
	<div class="home-wrapper">
		<topbar></topbar>
		<div class="news-box wrapper" ref="wrapper">	
			<ul class="news-list content">
				<li class="news-item bb" v-for="item in newsList">
					<div v-if="item.images.length === 0">
						<h4 class="news-title">{{item.title}}</h4>
						<p class="news-content">{{item.intro}}</p>
						<div class="news-info">
							<span>{{item.source}}</span>
							<span>评论：{{item.comment}}</span>
						</div>
					</div>
					<div class="df-sb" v-else-if="item.images.length === 1">
						<div class="item-l">
							<h4 class="news-title">{{item.title}}</h4>
							<p class="news-content line2">{{item.intro}}</p>
							<div class="news-info">
								<span>{{item.source}}</span>
								<span>评论：{{item.comment}}</span>
							</div>
						</div>
						<div class="item-r">
							<img :src="item.images[0]">
						</div>
					</div>
					<div v-else>
						<h4 class="news-title">{{item.title}}</h4>
						<p class="news-content">{{item.intro}}</p>
						<div class="news-imgs df-sb">
							<img :src="img" :style="{width: item.images.length === 2 ? '40%':'25%'}" v-for="img in item.images">
						</div>
						<div class="news-info">
							<span>{{item.source}}</span>
							<span>评论：{{item.comment}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Topbar from './topbar/index.vue'
	import {mapGetters} from 'vuex'
	import BScroll from 'better-scroll'
	import axios from '@/utils/fetch.js'

	export default {
		name: 'index',
		components: {
			Topbar
		},
		created() {
			this.loadData();
		},
		computed: {
			...mapGetters(['menuList', 'menuIndex'])
		},
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			loadData() {
				const me = this;
				axios.get('home/list', this.menuList[this.menuIndex])
					 .then(res => {
					 	me.newsList = res.data.data.list.concat(me.newsList)
					 	me.$nextTick(() => {
					 		debugger
				            if (!this.scroll) {
				              me.scroll = new BScroll(me.$refs.wrapper, {})
				              me.scroll.on('touchend', (pos) => {
				              	debugger
				                if (me.scroll.y <= (me.scroll.maxScrollY + 50)) {
				                  me.loadData()
				                }
				              })
				            } else {
				              me.scroll.refresh()
				            }
				        })
					})
				
			}
		}
	}
</script>
<style>
	.news-box {
		width: 100%;
    	height: calc(100% - 0.4rem);
		overflow: hidden;
		position: relative;
		transform: rotate(0deg);
	}
	@component news {
		@descendent list {
			z-index: 10;
		}

		@descendent item {
			padding: 0.2rem 0.1rem;

			.item-l {
				width: 70%;
				padding-right: 10px;
			}

			.item-r {
				width: 30%;

				img {
					width: 100%;
				}
			}
		}

		@descendent title {
			color: #363636;
		}

		@descendent content {
			font-size: 0.16rem;
		    line-height: 0.2rem;
		    margin: 0.1rem 0;
		}

		@descendent info {
			span {
				font-size: 0.1rem;
			    margin-right: 0.04rem;
			    color: #999;
			}
		}
	}
</style>