interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex w-screen flex-col bg-white">
      <main className="flex-1 overflow-hidden rounded-3xl bg-slate-50 p-8">
        {children}
      </main>
    </div>
  );
}
