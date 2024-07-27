import AboutUs from "../../component/AboutUs/AboutUs";
import Hero from "../../component/Hero/Hero";
import ServicesSection from "../../component/ServicesSection/ServicesSection";
import Testimonials from "../../component/Testimonials/Testimonials";
import Project from "../../component/Project/Project";
import Counter from "../../component/Counter/Counter";
import ArticlesSection from "../../component/ArticlesSection/ArticlesSection";
import CallToActionSection from "../../component/CallToActionSection/CallToActionSection";
function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutUs />
      <Testimonials />
      <Project />
      <Counter />
      <ArticlesSection />
      <CallToActionSection />
    </>
  );
}

export default Home;
