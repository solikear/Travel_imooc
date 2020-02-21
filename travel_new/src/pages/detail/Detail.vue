<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg='bannerImg' :galleryImgs='galleryImgs'></detail-banner>
		<detail-header></detail-header>
		<div class="content"><detail-list :list="categoryList"></detail-list></div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data() {
		return {
			sightName: '',
			bannerImg: '',
			galleryImgs: [],
			categoryList: [],
			// lastId:''
		}
	},
	methods: {
		getDetailInfoSucc(res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.galleryImgs = data.galleryImgs
				this.categoryList = data.categoryList
			}
		},
		getDetailInfo() {
			axios
				.get('/api/detail.json', {
					params: {
						id: this.$route.params.id
					}
				})
				.then(this.getDetailInfoSucc)
		}
	},
	mounted() {
		// this.lastId = this.$route.params.id
		this.getDetailInfo()
	},
	// activated() {
	// 	console.log(this.$route.params.id);
	// 	if(this.lastId !== this.$route.params.id){
	// 		this.lastId = this.$route.params.id
	// 		this.getDetailInfo()
	// 	}
	// }
}
</script>

<style lang="stylus" scoped>
.content
	height 50rem
</style>
