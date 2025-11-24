import Image from "next/image";

const services = [
    {
        title: "Hair Styling",
        description: "Expert cuts, coloring, and styling to frame your face perfectly.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
    },
    {
        title: "Skin Care",
        description: "Rejuvenating facials and treatments for glowing, healthy skin.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Beauty & Makeup",
        description: "Professional makeup and beauty services for every occasion.",
        image: "https://images.unsplash.com/photo-1487412947132-23298456b0c0?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold mb-4">Our Premium Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover our range of exclusive treatments designed to enhance your natural beauty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-gold/50 transition-all duration-300">
                            <div className="aspect-w-16 aspect-h-9 h-64 relative">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
                            </div>
                            <div className="p-6 relative z-10 -mt-12 bg-gradient-to-t from-black via-black to-transparent pt-12">
                                <h3 className="text-2xl font-serif font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {service.description}
                                </p>
                                <button className="text-gold font-medium hover:text-white transition-colors flex items-center gap-2">
                                    Learn More <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
