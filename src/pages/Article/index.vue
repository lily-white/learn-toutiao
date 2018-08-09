<template>
	<div class="article-wrapper">
		<div class="article-head df-sb bb">
			<icon-svg name="jiantou" @click.native="back($router)"></icon-svg>
			<icon-svg name="More"></icon-svg>
		</div>
		<div>
			<h2 class="article-title">{{article.title}}</h2>
			<div class="article-info df-sb">
				<div class="article-author df-sa">
					<img :src="article.avatar" class="avartar">
					<div class="author-name">
						<h6>{{article.source}}</h6>
						<div class="article-date">{{article.time}}小时前</div>
					</div>
				</div>
				<div class="follow-btn" 
					:class="article.attention? 'like-n border-half' : 'like-y'"
					@click="article.attention = !article.attention">{{article.attention ? '已关注' : '关注'}}</div>
			</div>
			<div class="article-content">
				<p>{{article.intro}}</p>
			</div>
		</div>
		<div class="tags">
			<div class="tag-item" v-for="tag in article.tags">{{tag}}</div>
		</div>
		<div class="like-btn" :class="{'is-liked': article.islike}" @click="article.islike = !article.islike">
			<icon-svg  name="zan"></icon-svg>
			<span>{{article.like_num}}</span>
		</div>
	</div>
</template>
<script>
	import axios from '@/utils/fetch.js'

	export default {
		name: 'article',
		data() {
			return {
				article: null
			}
		},
		async created() {
			this.$showCircleLoading();
			await axios.get('article/info',{id: this.$route.params.articleId})
				 .then(res => {
				 	this.article = res.data.data;
			 	 })
			this.$hideCircleLoading();
		}
	}
</script>
<style>
#view.article-wrapper {
	height: auto;
}
@component-namespace article {
	@component wrapper {
		padding: 0 0.1rem;

		.tag-item {
			display: inline-block;
		    margin-right: 0.15rem;
		    margin-bottom: 0.15rem;
		    padding: 0.06rem 0.1rem;
		    background: #ccc;
		    color: #333;
		    border-radius: 0.04rem;
		    font-size: 0.12rem;
		}

		.like-btn {
			color: #f85959;
    		width: 1rem;
		    height: 0.3rem;
		    line-height: 0.3rem;
		    font-size: 0.12rem;
		    border: 1px solid #f85959;
		    border-radius: 0.15rem;
		    margin: 0 auto;
		    text-align: center;

		    span {
		    	margin-left: 0.1rem;
		    }

		    @when liked{
		    	border-color: #ccc;
		    	color: #000;
		    }
		}

		.like-y {
			color: #f4f4f4;
    		background-color: #d43d3d;
		}

		.like-n {
			color: #bbb;
		}
	}

	@component head {
		height: 0.5rem;
    	font-size: 0.25rem;
	}

	@component title {
		margin: 0.1rem 0;
	}

	@component info {
		.follow-btn {
			padding: 0.06rem 0.15rem;
		    border-radius: 0.04rem;
		    font-size: 0.14rem;
		}
	}

	@component author {

		.avartar {
			width: 0.4rem;
		    height: 0.4rem;
		    border-radius: 50%;
		    margin-right: 0.1rem;
		}

		.author-name {
    		font-size: 0.12rem;
		}

		.article-date {
			color: #ccc;
		}
	}

	@component content {
		margin: 0.2rem 0;
	    line-height: 0.25rem;
	    font-size: 0.16rem;
	}
}
</style>