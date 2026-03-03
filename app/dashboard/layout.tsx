
import { Suspense } from "react";
import DashboardLayout, { DashboardSidebar, DashboardNavbarSlot, DashboardContent }  from "../../features/dashboard/dashboard-layout";
import Sidebar from "../../features/dashboard/sidebar";
import DashboardNavbar from "../../features/dashboard/dashboard-navbar";
import { SidebarProvider } from "../../features/dashboard/sidebar-context";
import AuthGuard from "../../features/authentication/auth-guard";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <SidebarProvider>
        <DashboardLayout>
          <DashboardSidebar>
            <Sidebar />
          </DashboardSidebar>

          <div className="flex flex-col flex-1 overflow-hidden">
            <DashboardNavbarSlot>
              <Suspense fallback={<div className="w-full h-14" />}>
                <DashboardNavbar />
              </Suspense>
            </DashboardNavbarSlot>

            <DashboardContent>{children}</DashboardContent>
          </div>
        </DashboardLayout>
      </SidebarProvider>
    </AuthGuard>
  );
}

export default Dashboard;