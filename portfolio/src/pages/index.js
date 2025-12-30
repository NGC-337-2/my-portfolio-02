import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
// import Testimonials from '../components/Testimonials';
// import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Credentials from '../components/Credentials';

export default function Home() {
  return (
    <Layout>

      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Credentials /> */}
      <Experience />
      <Achievements />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </Layout>
  );
}