import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - THEMosque",
  description: "Meet our dedicated team.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Team", active: true },
        ]}
      />
      <Team />
    </>
  );
}
