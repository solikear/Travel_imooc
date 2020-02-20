<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img
				class="banner-img"
				src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
			/>
			<div class="banner-info">
				<div class="banner-title">二次元海洋世界</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe692;</span>
					39
				</div>
			</div>
		</div>
		<common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
	</div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
export default {
	name: 'DetailBanner',
	components: {
		CommonGallery,
	},
	data: function() {
		return {
			showGallery:false,
			imgs: [
				'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
				'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
			]
		}
	},
	methods:{
		handleBannerClick(){
			this.showGallery = true
		},
		handleGalleryClose(){
			this.showGallery = false
		}
	}
}
</script>

<style lang="stylus" scoped>
.banner
	position relative
	overflow hidden
	height 0
	padding-bottom 55%
	.banner-img
		width 100%
	.banner-info
		display flex
		position absolute
		left 0
		right 0
		bottom 0
		height 0.6rem
		color #fff
		background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
		.banner-title
			flex 1
			font-size 0.32rem
			padding 0 0.2rem
			// padding-left
		.banner-number
			height 0.32rem
			line-height 0.32rem
			margin-top 0.03rem
			padding 0 0.4rem
			border-radius 0.2rem
			background rgba(0, 0, 0, 0.8)
			font-size 0.24rem
			.banner-icon
				font-size 0.25rem
</style>
