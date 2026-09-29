import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactFAQ from "@/components/ContactFAQ";
import OfficeHours from "@/components/OfficeHours";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Contact />
        <ContactForm />
        <OfficeHours />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;