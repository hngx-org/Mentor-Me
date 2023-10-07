import { SideBarIcons } from "@/public/assets/icons";
export type SidebarLinksProps = {
	path: string;
	label: string;
	iconLight?: React.ReactNode;
	iconDark?: React.ReactNode;
	id: number;
};

export const sidebarMenteeLinks: SidebarLinksProps[] = [
	{
		id: 1,
		path: "/mentee-profile?path=home",
		label: "Home",
		iconDark: SideBarIcons.homeIcon(),
		iconLight: SideBarIcons.homeIcon2(),
	},

	{
		id: 2,
		path: "/mentee-messages?path=messages",
		label: "Messages",
		iconDark: SideBarIcons.messagesIcon(),
		iconLight: SideBarIcons.messaging2(),
	},
	{
		id: 3,
		path: "/mentee-booking?path=bookings",
		label: "Bookings",
		iconDark: SideBarIcons.bookingIcon(),
		iconLight: SideBarIcons.booking2(),
	},
	{
		id: 4,
		path: "/mentee-sessions?path=sessions",
		label: "Sessions",
		iconDark: SideBarIcons.sessions(),
		iconLight: SideBarIcons.session2(),
	},
	{
		id: 5,
		path: "/mentee-resources?path=resources",
		label: "Resources",
		iconDark: SideBarIcons.resourcesIcon(),
		iconLight: SideBarIcons.resources2(),
	},
	{
		id: 6,
		path: "/mentee-communities?path=communities",
		label: "Communities",
		iconDark: SideBarIcons.communitiesIcon(),
		iconLight: SideBarIcons.communities2(),
	},
];

export const sidebarMentorLinks: SidebarLinksProps[] = [
	{
		id: 1,
		path: "/mentor-profile?path=home",
		label: "Home",
		iconDark: SideBarIcons.homeIcon(),
		iconLight: SideBarIcons.homeIcon2(),
	},

	{
		id: 2,
		path: "/mentor-messages?path=messages",
		label: "Messages",
		iconDark: SideBarIcons.messagesIcon(),
		iconLight: SideBarIcons.messaging2(),
	},
	{
		id: 3,
		path: "/mentor-mentors?path=MyMentors",
		label: "My Mentors",
		iconDark: SideBarIcons.myMentorsIcons(),
		iconLight: SideBarIcons.MyMentors2(),
	},
	{
		id: 4,
		path: "/mentor-booking?path=bookings",
		label: "Bookings",
		iconDark: SideBarIcons.bookingIcon(),
		iconLight: SideBarIcons.booking2(),
	},
	{
		id: 5,
		path: "/mentor-sessions?path=sessions",
		label: "Sessions",
		iconDark: SideBarIcons.sessions(),
		iconLight: SideBarIcons.session2(),
	},
	{
		id: 6,
		path: "/mentor-resources?path=resources",
		label: "Resources",
		iconDark: SideBarIcons.resourcesIcon(),
		iconLight: SideBarIcons.resources2(),
	},
	{
		id: 7,
		path: "/mentor-communities?path=communities",
		label: "Communities",
		iconDark: SideBarIcons.communitiesIcon(),
		iconLight: SideBarIcons.communities2(),
	},
	{
		id: 8,
		path: "/mentor-earnings?path=earnings",
		label: "Earnings",
		iconDark: SideBarIcons.earning(),
		iconLight: SideBarIcons.earning2(),
	},
	{
		id: 9,
		path: "/mentor-plans?path=plans",
		label: "Plans",
		iconDark: SideBarIcons.plans(),
	},
	{
		id: 10,
		path: "/mentor-reviews?path=reviews",
		label: "Reviews",
		iconDark: SideBarIcons.reviews(),
	},
];
