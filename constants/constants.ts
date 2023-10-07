import { SideBarIcons } from "@/public/assets/Icons";
export type SidebarMenteeLinksProps = {
  path: string;
  label: string;
  iconLight?: React.ReactNode;
  iconDark?: React.ReactNode;
  id: number;
};

export const sidebarMenteeLinks: SidebarMenteeLinksProps[] = [
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
