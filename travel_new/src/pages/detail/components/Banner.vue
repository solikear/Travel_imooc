<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" />
			<div class="banner-info">
				<div class="banner-title">{{ sightName }}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe692;</span>
					{{ galleryImgs.length }}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallery
				:imgs="galleryImgs"
				v-show="showGallery"
				@close="handleGalleryClose"
			></common-gallery>
		</fade-animation>
	</div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
	name: 'DetailBanner',
	components: {
		CommonGallery,
		FadeAnimation
	},
	data: function() {
		return {
			showGallery: false
		}
	},
	props: {
		sightName: String,
		bannerImg: String,
		galleryImgs: Array
	},
	methods: {
		handleBannerClick() {
			this.showGallery = true
		},
		handleGalleryClose() {
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
		background linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
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
