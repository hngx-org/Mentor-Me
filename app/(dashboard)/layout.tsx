import Navbar from "@/components/sections/nav-bars/NavbarMentee";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<main>
				<Navbar />

				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
