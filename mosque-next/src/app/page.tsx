import About from "@/components/About";
import Activities from "@/components/Activities";
import Blog from "@/components/Blog";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import MosqueSearch from "@/components/MosqueSearch";
import Sermon from "@/components/Sermon";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <MosqueSearch />
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
