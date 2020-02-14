<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" /></swiper-slide>
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
				loop : true,
				autoplay:5000
			},
			swiperList: [
				{
					id: '0001',
					imgUrl: 'http://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
				},
				{
					id: '0002',
					imgUrl: 'http://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
				}
			]
		};
	},
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
