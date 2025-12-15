import Events from "@/components/Events";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - THEMosque",
  description: "Join our upcoming events.",
};

export default function EventPage() {
  return (
    <>
      <PageHeader
        title="Events"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Events", active: true },
        ]}
      />
      <Events />
    </>
  );
}
