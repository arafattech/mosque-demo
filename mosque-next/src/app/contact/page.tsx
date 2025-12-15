import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - THEMosque",
  description: "Get in touch with us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Contact", active: true },
        ]}
      />
      <Contact />
    </>
  );
}
