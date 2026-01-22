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

export default function Page() {
  return (
    <div className="h-screen w-full p-4">
      <div className="h-[600px] w-[600px] overflow-hidden rounded-lg border shadow-lg">
        <PrescriptionMap />
      </div>
    </div>
  );
}
