import Navigation from "@/components/Navigation";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import ProgramDetails from "@/components/ProgramDetails";
import Curriculum from "@/components/Curriculum";
import ProgramSchedule from "@/components/ProgramSchedule";
import EnrollmentProcess from "@/components/EnrollmentProcess";
// import ProgramPricing from "@/components/ProgramPricing";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Programs />
        <ProgramDetails />
        <Curriculum />
        <ProgramSchedule />
        {/* <ProgramPricing /> */}
        <EnrollmentProcess />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;