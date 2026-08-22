import { DaycareShell } from "@/components/layout/daycare-shell";
import { KidsList } from "@/components/kids/kids-list";
import { kids } from "@/components/kids/kids-data";

export default function KidsPage() {
  return (
    <DaycareShell activeSection="kids">
      <KidsList kids={kids} />
    </DaycareShell>
  );
}
