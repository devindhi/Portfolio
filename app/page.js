import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import ProjectSection from "./components/ProjectSection"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="bg-black" style={{ padding: '2.5rem'}}  >
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
      <Hero/>
      <About/>
      <ProjectSection/>
      <Contact/>
      </div>
    </main>
  );
}
