import com from '@/static/js/common.js'
export const invite = {
	data() {
		return {
			group: [
				// {
				// 	src: "/static/friends1.png"
				// },
				// {
				// 	src: "/static/friends.png"
				// },
				// {
				// 	src: "/static/friends1.png"
				// }
			],
			h: '',
			e: ''
		}
	},
	mounted() {
		this.h = (this.$store.state.common.safeAreaHeight * 0.7) * (750 / this.$store.state.common.screenWidth)
		this.e = this.$store.state.common.safeAreaHeight * 0.05
	},
	methods: {

	}
}
