<template>
	<div class="topbar">
		<ul class="fc">
			<li class="topbar-item" v-for="item in items">
				<icon-svg :name="item.icon"></icon-svg>
				<label class="topbar-label">{{item.title}}</label>
			</li>
		</ul>
	</div>
</template>
<style scoped>
@component topbar {
	padding: 0.1rem 0;

	@descendent item {
		flex: 1;
		border-right: 1px solid #ddd;
		text-align: center;
		font-size: 0.16rem;

		svg {
			font-size: 0.2rem;
			vertical-align: middle;
		}

		&:last-child {
			border-right: none;
		}

		&:nth-child(1) svg {
			color: #409EFF;
		}

		&:nth-child(2) svg {
			color: #67C23A;
		}

		&:nth-child(3) svg {
			color: #f85959;
		}
	}
	
}

</style>
<script>
	export default {
		name: 'topbar',
		data() {
			return {
				items: [
					{title: '文字', icon: '24'},
	                {title: '图片', icon: 'tupian'},
	                {title: '上传视频', icon: 'shipin'},
				]
			}
			
		}
	}
</script>