import { NotificationBingIcon } from "@/public/SVGs";
import { SideBarIcons } from "@/public/assets/icons";

export const NavbarMentee = () => {
	return (
		<nav className="flex w-full justify-between px-3 items-center border-[1px] border-black my-10">
			<h3 className="  font-Hanken font-[700] text-[24px]">Title</h3>
			<div className="flex items-center gap-3">
				<span>{SideBarIcons.notify()}</span>
				<span className="   text-[12px] text-Neutra40  font-Hanken">
					<span className="font-[500] text-black text-[14px]">
						Funmi Oladapo
					</span>
					<br /> C++ Developer
				</span>
				<span>
					<NotificationBingIcon />
				</span>
			</div>
		</nav>
	);
};
