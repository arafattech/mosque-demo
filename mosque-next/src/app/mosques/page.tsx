import MosqueListing from "@/components/MosqueListing";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Find Mosques - THEMosque",
  description: "Find mosques in your area with prayer times and facilities.",
};

export default function MosquesPage() {
  return (
    <>
      <PageHeader
        title="Find Mosques"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Mosques", active: true },
        ]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <MosqueListing />
      </Suspense>
    </>
  );
}
