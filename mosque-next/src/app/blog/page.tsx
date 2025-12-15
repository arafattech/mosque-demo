import Blog from "@/components/Blog";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - THEMosque",
  description: "Read our latest blog posts.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Latest Blog"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Blog", active: true },
        ]}
      />
      <Blog />
    </>
  );
}
