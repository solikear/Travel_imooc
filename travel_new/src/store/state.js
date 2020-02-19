let defaultCity = '深圳'
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {
	console.log("error");
}

export default {
	city:defaultCity
}
