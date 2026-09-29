import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import TeamSection from "@/components/TeamSection";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Methodology from "@/components/Methodology";
import ImpactStories from "@/components/ImpactStories";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* <TeamSection /> */}
        <Timeline />
        <Methodology />
        <Achievements />
        <ImpactStories />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;