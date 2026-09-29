import Navigation from "@/components/Navigation";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import CoreValues from "@/components/CoreValues";
import StrategicGoals from "@/components/StrategicGoals";
import CommunityImpact from "@/components/CommunityImpact";
// import Partnerships from "@/components/Partnerships";
import FutureRoadmap from "@/components/FutureRoadmap";

const VisionPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Vision />
        <CoreValues />
        <StrategicGoals />
        <CommunityImpact />
        {/* <Partnerships /> */}
        <FutureRoadmap />
      </main>
      <Footer />
    </div>
  );
};

export default VisionPage;