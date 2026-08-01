import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";

const Home = () => {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-x-hidden

        bg-[#030712]

        text-white
      "
    >
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
