// app/page.tsx (or wherever you are showing the map)
"use client";

import dynamic from "next/dynamic";
const PrescriptionMap = dynamic(
  () => import("./_components/prescription-map"),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-gray-100" />,
  },
);

export default function DigitalTwin() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 p-4">
      <h3 className="text-2xl font-bold">Your farm&apos;s digital twin</h3>
      <div className="h-[600px] w-[80vw] overflow-hidden rounded-lg border shadow-lg">
        <PrescriptionMap />
      </div>
    </div>
  );
}
