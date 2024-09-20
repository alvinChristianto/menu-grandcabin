// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

// export interface NavAction {
// 	name: string
// 	link: string
// 	style: string
// 	size: string
// }

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	// navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/koala_logo.png',
		alt: 'Service The Grand Cabin Hotel',
		text: 'ServiceCabin'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Menu Makanan', link: '/menu' },
		{ name: 'Massage', link: '/massage' },
		{ name: 'Laundry', link: '/laundry' },
		{ name: 'Bike Rent', link: '/bikerent' },
		{ name: 'Shuttle', link: '/shuttle-bus' },
		
	]
	// navActions: [{ name: 'Try it now', link: '/', style: 'primary', size: 'lg' }]
}
