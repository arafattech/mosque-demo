import PageHeader from "@/components/PageHeader";
import Sermon from "@/components/Sermon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons - THEMosque",
  description: "Listen to our latest sermons.",
};

export default function SermonPage() {
  return (
    <>
      <PageHeader
        title="Sermons"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Sermons", active: true },
        ]}
      />
      <Sermon />
    </>
  );
}
