<template>
	<div class="topbar-box">
		<icon-svg name="close" class="close" @click.native="$emit('close')"></icon-svg>
		<div>
			<div class="topbar-box-title">
				<span>我的频道</span> <small>点击删除以下频道</small>
			</div>
			<ul class="topbar-box-list">
				<li class="topbar-box-item" v-for="item in menuList" @click="$store.dispatch('delMenu', item)">
					<span class="content">{{item.title}}</span>
				</li>
			</ul>
		</div>
		<div>
			<div class="topbar-box-title">
				<span>推荐频道</span> <small>点击添加以下频道</small>
			</div>
			<ul class="topbar-box-list">
				<li class="topbar-box-item" v-for="item in allMenuList" @click="$store.dispatch('addMenu', item)">
					<span class="content">{{item.title}}</span></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {menuList as allMenuList} from '@/store/modules/menu.js'
	import {mapGetters} from 'vuex'
	export default {
		name: 'topbar-box',
		computed: {
			...mapGetters(['menuList']),
			allMenuList() {
				return allMenuList.filter(menu => {
					return !this.menuList.some(v => v.title === menu.title)
				})
			}
		}

	}
</script>
<style>
	@component topbar-box{
		position: fixed;
        top: 100%;
        left: 0;
        width: 100%;
        height: calc(100% - 0.1rem);
        background: #f5f5f5;
        text-align: left;
        border-top-right-radius: 0.1rem;
        border-top-left-radius: 0.1rem;
        z-index: 99;
        padding: 0.1rem;
        padding-top: 0.34rem;
        transition: top .2s ease-out;

        .close {
        	position: absolute;
            left: 0.05rem;top: 0.05rem;
            padding: 0.05rem;
            font-size: 0.24rem;
        }

		@descendent title {
			font-size: 16px;
			color: #363636;

			small {
				color: #666;
			}
		}

		@descendent item {
			width: 25%;
            margin: 0.06rem 0;
            display: inline-block;

            .content {
            	width: 0.8rem;
            	text-align: center;
	            line-height: 0.35rem;
	            background: #f0f0f0;
	            color: #666;
	            display: block;
            }
		}
	}
</style>