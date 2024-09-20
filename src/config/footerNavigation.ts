// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'thecabinhotelgroup.',
		aboutText:
			'Berbagai layanan di the Grand Cabin Hotel',
		logo: {
			src: '/koala_logo.png',
			alt: 'Service The Grand Cabin Hotels',
			text: 'ServiceCabin'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Menu Makanan',
					subCategoryLink: '/menu'
				},
				{
					subCategory: 'Massage Service',
					subCategoryLink: '/massage'
				},
				{
					subCategory: 'Laundry',
					subCategoryLink: '/laundry'
				},
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/'
				},
				// {
				// 	subCategory: 'News',
				// 	subCategoryLink: '/blog'
				// },
				// {
				// 	subCategory: 'Careers',
				// 	subCategoryLink: '/blog'
				// }
			]
		},
		
	],
	subFooter: {
		copywriteText: '© cabin hotel 2024.'
	}
}
