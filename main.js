// Erstellen der Vue-Instanz mittels Vue.createApp({...})
const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Socks',
			image: './assets/images/socks_blue.jpg',
			inStock: true,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{
					id: 2234,
					color: 'green',
					bild: './assets/images/socks_green.jpg',
				},
				{
					id: 2235,
					color: 'blue',
					bild: './assets/images/socks_blue.jpg',
				},
			],
		}
	},
	methods: {
		// "this" ist die Vue-Instanz
		addToCart() {
			this.cart += 1
		},
		takeFromCart() {
			this.cart -= 1
		},
		updateImage(variantImage) {
			this.image = variantImage // der Eigenschaft "image" der Vue-Instanz wird ein neuer "bild"-Wert zugewiesens
		},
	},
})
