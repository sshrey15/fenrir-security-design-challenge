
import DashboardLayout  from "../../features/dashboard/dashboard-layout";
import Sidebar from "../../features/dashboard/sidebar";
import DashboardNavbar from "../../features/dashboard/dashboard-navbar";
function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <DashboardLayout.Sidebar>
        <Sidebar />
      </DashboardLayout.Sidebar>

      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardLayout.Navbar>
          <DashboardNavbar />
        </DashboardLayout.Navbar>

        <DashboardLayout.Content>{children}</DashboardLayout.Content>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;