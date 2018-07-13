<template>
	<div class="home-wrapper">
		<topbar></topbar>
		<div class="news-box">	
			<ul class="news-list" v-for="item in newsList">
				<li class="news-item bb" v-if="item.images.length === 0">
					<div>
						<h4 class="news-title">{{item.title}}</h4>
						<p class="news-content">{{item.intro}}</p>
						<div class="news-info">
							<span>{{item.source}}</span>
							<span>评论：{{item.comment}}</span>
						</div>
					</div>
				</li>
				<li class="news-item bb" v-else-if="item.images.length === 1">
					<div class="df-sb">
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
				</li>
				<li class="news-item bb" v-else>
					<div>
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
	export default {
		name: 'index',
		components: {
			Topbar
		},
		created() {
			this.$store.dispatch('getHomeList');
			console.log(this.newsList)
		},
		computed: {
			...mapGetters(['newsList'])
		}
	}
</script>
<style>
	.news-box {
		width: 100%;
    	height: calc(100% - 0.4rem);
		overflow-y: scroll;
	}
	@component news {
		@descendent list {

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