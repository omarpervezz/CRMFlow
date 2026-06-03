import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        <Sidebar />

        <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
          <Topbar />
          <div className="flex-1 p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
