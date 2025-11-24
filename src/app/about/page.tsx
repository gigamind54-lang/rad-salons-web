import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-20">
                <AboutSection />
                <Reviews />
            </div>
            <Chatbot />
            <Footer />
        </main>
    );
}
