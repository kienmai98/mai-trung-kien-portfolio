import { MainNav } from '@/web/components/Nav';
import { dashboardConfig } from '@/web/config/dashboard';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="container mx-auto flex h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 mt-6 h-16 rounded-xl bg-white shadow-sm">
        <MainNav
          externalItems={dashboardConfig.externalNav}
          items={dashboardConfig.mainNav}
        />
        <img
          src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/357641586_989279642192551_5391016568570332923_n.png?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HQ6VYukYlZwAX-iQr2Y&_nc_ht=scontent.fdad1-3.fna&oh=03_AdQqVx9w9LxbgzqdWep6qOpztrI7vYlUYJ_HcQIOOMTPZQ&oe=64CE0C55"
          alt=""
        />
      </header>

      <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
    </div>
  );
}
