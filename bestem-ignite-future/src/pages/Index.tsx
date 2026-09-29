import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Programs from "@/components/Programs";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import FeaturedNews from "@/components/FeaturedNews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="cta">
          <CallToAction />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="statistics">
          <Statistics />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="vision">
          <Vision />
        </section>
        <section id="news">
          <FeaturedNews />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
