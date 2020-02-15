<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
			<swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 5000
			}
			// swiperList : this.list
		};
	},
	props: {
		list: Array
	},
	computed: {
		showSwiper() {
			return this.list.length;
		}
	}
};
</script>

<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
	background #fff
.wrapper
	width 100%
	height 0
	overflow hidden
	padding-bottom 31.25%
	background #eee
	// height 31.25vw
	.swiper-img
		width 100%
</style>
