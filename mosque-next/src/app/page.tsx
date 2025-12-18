import About from "@/components/About";
import Activities from "@/components/Activities";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import MosqueListing from "@/components/MosqueListing";
import MosqueSearch from "@/components/MosqueSearch";
import Sermon from "@/components/Sermon";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <MosqueSearch />
      <Suspense fallback={<div>Loading...</div>}>
        <MosqueListing enableFilters={false} defaultLimit={6} />
      </Suspense>
      <About />
      <Activities />
      <Events />
      <Sermon />
      <Blog />
      <Team />
      <Testimonial />
    </>
  );
}
