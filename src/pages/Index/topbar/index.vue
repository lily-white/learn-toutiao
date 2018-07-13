<template>
	<div class="topbar-wrapper df-sb bb">
		<div class="topbar-menu">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in menuList" :class="{'is-active': menuIndex === index}" :key="index" @click.native="active(index)">{{item.title}}</swiper-slide>
			</swiper>
		</div>
		<div class="topbar-more-btn fc">
			<i class="list-shadow"></i>
			<span class="cross" @click="isTopbarBox=true"></span>
		</div>
		<topbar-box :class="{'topbar-active': isTopbarBox}" @close="isTopbarBox=false"></topbar-box>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapGetters} from 'vuex'
	export default {
		name: 'topbar',
		components: {
		    swiper,
		    swiperSlide
		},
		data() {
			return {
				swiperOption: {
                	slidesPerView: 6
            	},
            	isTopbarBox: false
			}
		},
		computed: {
			...mapGetters(['menuList', 'menuIndex'])
		},
		methods: {
			active(id) {
				this.$store.state.home.menuIndex = id;
				this.$store.dispatch('getHomeList');
			}
		}
	}
</script>
<style>
@import '../../../styles/var.css';
	@component topbar {
		@descendent wrapper {
			height: 0.4rem;
	        line-height: 0.4rem;
	        color: $font-normal;
	        font-size: 0.16rem;
	        text-align: center;
	        position: relative;
	        background-color: #f3f4f5;

	        .topbar-active {
	        	top: 0.1rem;
	        }
		}
		
		@descendent menu {
			width: calc(100%-0.4rem);

			.is-active {
				color: $theme-red;
			}
		}

		@descendent more-btn {
			width: 0.4rem;
			height: 100%;
			position: relative;

			.list-shadow {
                position: absolute;
                right: 100%;
                top: 0;
                width: 0.1rem;
                height: 100%;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABIAAABXAK421QoAAAFiSURBVEjH1ZbbtoMgDERnKP//yaYPVSAhF077dHQtamU7k0RKAxwcPCF4ItF+tWMNsVZS91uJhNlRX7FGPMgizOrEObJSiZUUAnRkR6q0qnErm7Lhc9UDBaXUt0kN0FOaOo4SQ5BRCahOA3HT5KwTE50GZhV37VazJKYljjE2SE+sPsittC1XW/FmgNVsZJcvuhvrAbLqffNadPXLYgaLzs8wWSo6rk9FYdeBUW/x1DRswfS6ysuNlcDZ7ssTSCpIfDsZn/J8b+Omh8pjR/X8DkuWndwnINpOlukFbtvzVslAEmF+TCMaCC4fkr8oKUgVzmQ4IBojHfqFqwd28O0S6AXA7ib2P+HOTlzLcXZ3+tFz6yRObiOmGY+3k6ev5XN97Uq7FoCXkl5HTrT6tQiw2u1aY/TrZF551jyMFPZiOqW1O5zXiJx1PV/2Tw52tD8ddYc/9Zlq7qhBrlrtuhX/98cbycGBFpNaiv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDItMjdUMTc6NDQ6NDErMDg6MDDFbrv7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTAyLTI3VDE3OjQ0OjQxKzA4OjAwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=) no-repeat center right;
                background-size: contain;
            }

			.cross {
				size: 0.17rem;
				&:before, &:after {
					position: absolute;
					content: ' ';
					size: 0.04rem 0.17rem;
					background: $theme-red;
				}

				&:before {
					transform: rotate(90deg);
				}
			}
		}
		
	}
</style>