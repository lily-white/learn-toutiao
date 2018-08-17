<template>
	<div class="news-box" id="mescroll" :style="{'top': top, 'bottom': bottom}">	
		<slot></slot>
		<ul class="news-list" id="dataList">
			<router-link tag="li" :to="'/article/' + item.id" class="news-item bb" v-for="item in newsList">
			<!-- <router-link tag="li" :to="{path:'article', query: {articleId: item.id}}" class="news-item bb" v-for="item in newsList"> -->
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
			</router-link>
		</ul>
	</div>
</template>
<script>
	import MeScroll from 'mescroll.js'
	import 'mescroll.js/mescroll.min.css'
	import axios from '@/utils/fetch.js'

	export default {
		name: 'scrollList',
		data() {
			return {
				mecroll: null,
				newsList: [],
				page: 0
			}
		},
		props: {
			top: String,
			bottom: String,
			url: String,
			params: Object
		},
		mounted() {
			const me = this;
			this.mescroll = new MeScroll("mescroll", { 
                down: {use: false},
                up: {
                    auto: false,
                    callback: me.loadData , //上拉加载的回调
                    isBounce: false, //如果您的项目是在iOS的微信,QQ,Safari等浏览器访问的,建议配置此项.解析(必读)
                    empty:{ //配置列表无任何数据的提示
						warpId:"dataList",
					  	tip : "亲,暂无相关数据哦~" 
					},
					showNoMore: function(mescroll, upwarp) {
						//无更多数据
						upwarp.innerHTML = '无更多数据';
					},
                }
                
            });
		},
		methods: {
			loadData() {
				const me = this;
				axios.get(this.url, this.params).then(res => {
				 	me.newsList = res.data.data.list.concat(me.newsList);
				 	me.page++;
				 	me.mescroll.endByPage(10,3);
				})
			},
			reset() {
				this.newsList = [];
				this.mescroll.resetUpScroll();
			}
		},
		watch: {
			params() {
				this.reset();
			}
		}
	}
</script>
<style>
	@component news {

		@descendent box {
			width: 100%;
			position: fixed;
			height: auto;
			overflow-y: auto;
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