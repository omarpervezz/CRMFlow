import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DealStage } from "@/types";

const stageClasses: Record<DealStage, string> = {
  lead: "bg-blue-50 text-blue-700 border-blue-200",
  qualified: "bg-purple-50 text-purple-700 border-purple-200",
  proposal: "bg-amber-50 text-amber-700 border-amber-200",
  negotiation: "bg-orange-50 text-orange-700 border-orange-200",
  won: "bg-green-50 text-green-700 border-green-200",
  lost: "bg-red-50 text-red-700 border-red-200",
};

type DealStageBadgeProps = {
  stage: DealStage;
};

export function DealStageBadge({ stage }: DealStageBadgeProps) {
  return (
    <Badge variant="outline" className={cn("capitalize", stageClasses[stage])}>
      {stage}
    </Badge>
  );
}
