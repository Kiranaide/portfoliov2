import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Footer />
    </>
  );
}
