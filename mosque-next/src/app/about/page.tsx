import About from "@/components/About";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - THEMosque",
  description: "Learn more about THEMosque and our mission.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "About", active: true },
        ]}
      />
      <About />
      <Team />
    </>
  );
}
