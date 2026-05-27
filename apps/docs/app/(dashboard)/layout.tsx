import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[280px_1fr] min-h-screen">
      <Sidebar />
      <main className="min-w-0 flex flex-col">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
