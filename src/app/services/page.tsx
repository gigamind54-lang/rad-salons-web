import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-20">
                <Services />
            </div>
            <Chatbot />
            <Footer />
        </main>
    );
}
