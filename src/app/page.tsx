import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Reviews />
      <Chatbot />
      <Footer />
    </main>
  );
}
