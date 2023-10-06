import Navbar from "@/components/sections/Navbar";
import Sidebar from "@/components/sections/Sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <main>
        <Navbar />

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
