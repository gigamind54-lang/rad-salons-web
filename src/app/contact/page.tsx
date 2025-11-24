import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gold mb-4">Get in Touch</h1>
                    <p className="text-gray-400">We'd love to hear from you. Book an appointment or ask us anything.</p>
                </div>
                <ContactForm />
            </div>
            <Chatbot />
            <Footer />
        </main>
    );
}
