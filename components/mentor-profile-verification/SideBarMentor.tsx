import Sidebar, {
  SidebarItem,
} from "@/components/mentor-profile-verification/SideBar";
import { SideBarIcons } from "@/public/assets/icons";
import React from "react";
export default function SideBar() {
  return (
    <Sidebar>
      <SidebarItem
        icon={SideBarIcons.homeIcon()}
        text="Home"
        lightIcon={SideBarIcons.homeIcon2()}
      />
      <SidebarItem
        icon={SideBarIcons.messagesIcon()}
        text="Messaging"
        lightIcon={SideBarIcons.messaging2()}
      />
      <SidebarItem
        icon={SideBarIcons.myMentorsIcons()}
        text="My Mentees"
        lightIcon={SideBarIcons.MyMentors2()}
      />
      <SidebarItem
        icon={SideBarIcons.sessions()}
        text="Sessions"
        lightIcon={SideBarIcons.session2()}
      />
      <SidebarItem
        icon={SideBarIcons.resourcesIcon()}
        text="Resources"
        lightIcon={SideBarIcons.resources2()}
      />
      <SidebarItem
        icon={SideBarIcons.communitiesIcon()}
        text="Communities"
        lightIcon={SideBarIcons.communities2()}
      />
      <SidebarItem
        icon={SideBarIcons.earning()}
        text="Earnings"
        lightIcon={SideBarIcons.earning2()}
      />
      <SidebarItem
        icon={SideBarIcons.plans()}
        text="Plans"
        lightIcon={SideBarIcons.plans()}
      />
      <SidebarItem
        icon={SideBarIcons.reviews()}
        text="Reviews"
        lightIcon={SideBarIcons.reviews()}
      />
    </Sidebar>
  );
}
