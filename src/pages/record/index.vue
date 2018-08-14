<template>
	<div>
		<header-bar title="收藏/历史"></header-bar>
		<ul class="bt fc tab-container">
			<li class="tab-item" :class="{'is-active': index == type}" v-for="(item, index) in types">{{item.title}}</li>
		</ul>
		<scroll-list top='0.9rem' bottom='0' ref="scroll" :url="url" :params="params">
			<div class="record-tip">昨天总共阅读了9篇文章</div>
		</scroll-list>	
	</div>
</template>
<script>
	export default {
		name: 'record',
		data() {
			return {
				url: 'record/list',
				params: null,
				types: [
		            {title: '我的收藏'},
		            {title: '阅读历史'},
		            {title: '推送历史'}
		        ],
		        type: 0
		    }
		},
		created() {
			
		},
		actived() {
			this.type = this.$route.query.type;
			this.params = {title: this.types[this.type].title};
		},
		mounted() {
			this.$refs.scroll.loadData();
		},
	}
</script>
<style>
	@component tab {
		@descendent container {
			background-color: #fff;
		}

		@descendent item {
			width: 0.7rem;
			height: 0.4rem;
			line-height: 0.4rem;
			font-size: 0.14rem;
    		margin: 0 0.15rem;
    		text-align: center;
    		border-bottom: 0.02rem solid transparent;

    		@when active {
    			color: #f85959;
    			border-bottom: 0.02rem solid #f85959;
    		}
		}
	}
	.record-tip {
		line-height: 0.4rem;
	    color: #666;
	    padding: 0 0.1rem;
	    font-size: 0.14rem;
	}
	.news-list {
		background-color: #fff;
	}
</style>