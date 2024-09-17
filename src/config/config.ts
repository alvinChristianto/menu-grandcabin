// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Service di The Cabin hotel',
	siteDescription:
		'The Cabin Hotel menyediakan berbagai layanan atau service seperti menu makanan, massage dan laundry',
	ogImage: '/og.jpeg',
	logo: {
		src: '/koala_logo.png',
		alt: 'Service The Cabin'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
