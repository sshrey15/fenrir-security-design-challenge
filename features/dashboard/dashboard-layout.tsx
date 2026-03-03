type Props = {
  children: React.ReactNode;
};

type DashboardLayoutComponent = React.FC<Props> & {
  Sidebar: React.FC<Props>;
  Navbar: React.FC<Props>;
  Content: React.FC<Props>;
};

const DashboardLayout: DashboardLayoutComponent = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {children}
    </div>
  );
};

const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <aside className="w-60 shrink-0 bg-white dark:bg-[#0A0F13] border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto">
      {children}
    </aside>
  );
};

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <header className="shrink-0">
      {children}
    </header>
  );
};

const Content: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto dark:bg-[#0A0F13] bg-[#FAFAFA] p-2">
      {children}
    </main>
  );
};

DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Navbar = Navbar;
DashboardLayout.Content = Content;

export default DashboardLayout;