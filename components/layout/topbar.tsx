import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GlobalSearch } from "@/components/shared/global-search";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <div>
          <h2 className="text-base font-semibold md:text-lg">Dashboard</h2>
          <p className="hidden text-sm text-muted-foreground sm:block">
            Track your sales performance
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <GlobalSearch />

        <Avatar>
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
