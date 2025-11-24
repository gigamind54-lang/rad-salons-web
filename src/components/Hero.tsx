import Link from "next/link";

export default function Hero() {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
                    Experience <span className="text-gold">Luxury</span> & <span className="text-gold">Elegance</span>
                </h1>
                <p className="mt-4 text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
                    Premium Hair, Skin, and Beauty Services tailored to reveal your inner radiance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="#services"
                        className="px-8 py-4 bg-gold text-black text-lg font-semibold rounded-full hover:bg-gold-light transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                        Explore Services
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
