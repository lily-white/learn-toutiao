<template>
	<div class="headline-wrapper">
		<top-bar></top-bar>
		<div class="headline-list">
			<div class="headline-item bt">
				<div class="headline-item-head df-sb">
					<img src="http://dummyimage.com/70x70/7c79f2" class="headline-item-avartar">
					<div class="headline-item-info">
						<div class="author">Brian Martinez</div>
						<div>9小时以前 · 歌手</div>
					</div>
					<span class="headline-item-follow">关注</span>
				</div>
				<div class="headline-item-content">
					<p>第1页，联手打造线上线下融合的“新消费”，个别媒体将此解读为万达在互联网巨头“新零售”的竞争中“选边站队”。</p>
					<div class="images">
						<img src="http://dummyimage.com/200x200/98f279">
						<img src="http://dummyimage.com/200x200/98f279">
						<img src="http://dummyimage.com/200x200/98f279">
					</div>
					<div class="headline-item-read">454阅读</div>
				</div>
				<ul class="headline-item-action">
					<li class="item">
						<icon-svg name="exchangejiaohuan"></icon-svg>	
						<label>153</label>
					</li>
					<li class="item">
						<icon-svg name="comment"></icon-svg>	
						<label></label>
					</li>
					<li class="item">
						<icon-svg name="zan"></icon-svg>	
						<label></label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style>
	@component-namespace headline {
		@component item {
			padding-top: 0.1rem;

			@descendent head {
				padding: 0 0.1rem;
			}

			@descendent avartar {
				size: 0.4rem;
				border-radius: 50%;
				margin-right: 0.04rem;
			}

			@descendent info {
				color: #666;
    			font-size: 0.1rem;
    			flex: 1;

				.author {
					color: #111;
					font-size: 0.16rem;
				}
			}

			@descendent follow {
				color: #f85959;
				font-size: 0.12rem;
			}

			@descendent content {
				padding: 0 0.1rem 0.1rem;

				p {
					line-height: 0.25rem;
				}

				.images {
					margin-top: 0.04rem;
					display: flex;
					justify-content: space-between;
					align-items: center;

					img {
						width: 30%;
						margin-right: 3%;
						margin-top: 0.1rem;
					}
				}
			}

			@descendent read {
				font-size: 0.1rem;
    			color: #666;
    			margin-top: 0.05rem;
			}

			@descendent action {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.item {
					text-align: center;
					font-size: 0.14rem;
    				color: #666;
    				flex: 1;

    				label {
    					margin-left: 0.08rem;
    				}
				}
			}
		}
	}
</style>
<script>
	import topBar from './topBar'
	export default {
		name: 'headline',
		components: {
			topBar
		},
		data() {
			return {
			}
		}
	}
</script>