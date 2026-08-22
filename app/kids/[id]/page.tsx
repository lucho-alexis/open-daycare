import { notFound } from "next/navigation";

import { DaycareShell } from "@/components/layout/daycare-shell";
import { KidProfile } from "@/components/kids/kid-profile";
import { kids } from "@/components/kids/kids-data";

export default async function KidProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const kidId = /^\d+$/.test(id) ? Number(id) : NaN;
  const kid = kids.find((candidate) => candidate.id === kidId);

  if (!kid) {
    notFound();
  }

  return (
    <DaycareShell activeSection="kids">
      <KidProfile kid={kid} />
    </DaycareShell>
  );
}
