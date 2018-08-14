<template>
	<div>
		<div class="account-wrapper">
			<div class="account-head">
				<div class="account-info">
					<span class="avartar"><img src="../../assets/images/avatar.png"></span>
					<span class="nickname">test</span>
				</div>
				<ul class="account-list df-sa">
					<li class="account-item" v-for="item in infoList">
						<div class="item-count">{{item.num}}</div>
						<div class="item-label">{{item.title}}</div>
					</li>
				</ul>
			</div>
			<ul class="account-action df-sa bb">
				<router-link class="action-item" v-for="(item, index) in actionList" tag="li" :to="{path: 'record', query: {type: index}}">
					<icon-svg :name="item.icon" :class="'icon-' + item.icon"></icon-svg>
					<label class="action-name">{{item.title}}</label>
				</router-link>
			</ul>
			<div class="mb10">
				<mt-cell title="消息通知" :href="{path:''}" isLink ></mt-cell>
			</div>
			<div class="mb10">
				<mt-cell title="头条商城" :href="{path:''}" isLink value="邀请好友得200元现金"></mt-cell>
				<mt-cell title="京东特供" :href="{path:''}" isLink value="新人领188红包"></mt-cell>
			</div>
			<div class="mb10">
				<mt-cell title="用户反馈" :href="{path:''}" isLink></mt-cell>
				<mt-cell title="系统设置" :href="{path:''}" isLink></mt-cell>
			</div>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	import FooterBar from '@/pages/Layout/footerBar.vue'
	export default {
		name: 'account',
		data () {
            return {
                infoList: [
                    { num: 0, title: '动态' },
                    { num: 0, title: '关注' },
                    { num: 0, title: '粉丝' }
                ],
                actionList: [
                    { icon: 'shoucang', title: '收藏' },
                    { icon: '3lishi', title: '历史' },
                    { icon: 'school', title: '推送' },
                ]
            }
        },
		components: {
			FooterBar
		}
	}
</script>
<style>
	@component-namespace account {
		@component wrapper {
			height: calc(100%-0.5rem);
			.m-cell-wrapper {
				background-origin: border-box;
			}
		}
		@component head {
			background-color: #777;
			color: #fff;
		}

		@component info {
			padding: 0.2rem;

			.avartar {
			    display: inline-block;

			    img {
			    	width: 0.5rem;
			    	height: 0.5rem;
			    	border-radius: 50%;
			    	vertical-align: middle;
			    }
			}
		}

		@component list {
			font-size: 0.12rem;
		    color: #aaa;
		    padding-bottom: 0.1rem;

		    .item-count {
		    	color: #fff;
		    	margin-bottom: 0.08rem;
		    }

		    .account-item {
		    	flex: 1;
		    	height: 0.5rem;
		    	display: flex;
		    	align-items: center;
		    	flex-direction: column;
		    	justify-content: center;
		    }
		}
		

		@component action {
			background-color: #fff;
			padding: 0.1rem 0;
			margin-bottom: 0.1rem;

			.action-item {
				display: flex;
		    	align-items: center;
		    	flex-direction: column;
		    	justify-content: center;
		    	font-size: 0.12rem;

		    	.icon {
		    		font-size: 0.2rem;
    				margin-bottom: 0.08rem;
		    	}

		    	.icon-shoucang {
		    		color: #409EFF;
		    	}

		    	.icon-3lishi {
		    		color: #67C23A;
		    	}

		    	.icon-school {
		    		color: #f85959;
		    	}
			}
		}
	}
</style>