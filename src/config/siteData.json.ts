export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "台北城市愛樂",
	// Your website's title and description (meta fields)
	title: "台北城市愛樂 Taipei City Philharmonic",
	description: "台北城市愛樂 Taipei City Philharmonic",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "台北城市愛樂 Taipei City Philharmonic",
		email: "tcph2026@hotmail.com",
		twitter: "TCPH_2026",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/site-logo.png",
		alt: "TCPH logo",
		width: 1200,
		height: 630,
	},
};

export default siteData;
