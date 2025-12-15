import Activities from "@/components/Activities";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities - THEMosque",
  description: "Explore our activities and programs.",
};

export default function ActivityPage() {
  return (
    <>
      <PageHeader
        title="Activities"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Activities", active: true },
        ]}
      />
      <Activities />
    </>
  );
}
