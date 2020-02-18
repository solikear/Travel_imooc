<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :hotlist='hotCities' :cities='cities' :letter='letter'></city-list>
		<city-alphabet :cities='cities' @change='handleLetterChange'></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
import CityList from './components/List.vue';
import CityAlphabet from './components/Alphabet.vue';
export default {
	name: 'City',
	data() {
		return {
			hotCities: [],
			cities:{},
			letter:''
		}
	},
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	mounted() {
		this.getCityInfo();
	},
	methods: {
		getCityInfo() {
			axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
		},
		handleGetCityInfoSucc(res) {
			res = res.data;
			if(res.ret && res.data){
				const data =res.data
				this.hotCities = data.hotCities
				this.cities = data.cities
			}
		},
		handleLetterChange(letter){
			this.letter = letter
		}
	}
};
</script>

<style lang="stylus" scoped>

</style>
