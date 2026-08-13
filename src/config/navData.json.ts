// utils
import { countItems, getAllPosts, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
const posts = await getAllPosts();
const allCategories = posts.map((post) => post.data.categories).flat();
const countedCategories = countItems(allCategories);
const processedCategories = sortByValue(countedCategories);

export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "HOME",
		link: "/",
	},
	// {
	//	text: "Blog",
	//	link: "/blog/",
	//},
	{
		text: "CONCERTS & EVENTS",
		dropdown: [
			{
				text: "Season 2025",
				link: "/blog/qinlianqixiang/",
			},
			{
				text: "Season 2024",
				link: "/blog/melodyforgotten/",
			},
			{
				text: "Season 2023",
				link: "/categories/2023concerts/",
			},
			{
				text: "Season 2020",
				link: "/categories/musicians/",
			},
			{
				text: "Concerts",
				link: "/categories/concerts/",
			},
			{
				text: "Events Timeline",
				link: "/eventstimeline",
			},
		],
	},
	{
		text: "ABOUT",
		dropdown: [
			{
				text: "Orchestra",
				link: "/blog/orchestra/",
			},
			{
				text: "Music Director",
				link: "/blog/yichia-lai/",
			},
			{
				text: "Concert Master",
				link: "/blog/tyler-wang/",
			},
			{
				text: "Musicians",
				link: "#",
			},
			{
				text: "Strings",
				link: "/categories/strings/",
			},
			{
				text: "Woodwinds",
				link: "/categories/woodwinds/",
			},
			{
				text: "Brass & Percussion",
				link: "/categories/brass-percussion/",
			},
			{
				text: "Contact",
				link: "/contact/",
			},
		],
	},
	{
		text: "SUPPORT",
		link: "/blog/support/",
	},
];

export default navConfig;
