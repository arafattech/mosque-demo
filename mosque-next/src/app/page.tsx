import About from "@/components/About";
import Activities from "@/components/Activities";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Sermon from "@/components/Sermon";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Booking />
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
