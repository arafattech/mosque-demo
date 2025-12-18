import PageHeader from "@/components/PageHeader";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonial - THEMosque",
  description: "What people say about us.",
};

export default function TestimonialPage() {
  return (
    <>
      <PageHeader
        title="Testimonial"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Testimonial", active: true },
        ]}
      />
      <Testimonial />
    </>
  );
}
