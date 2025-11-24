import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-white/10">
                        <Image
                            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2672&auto=format&fit=crop"
                            alt="Rad Salons Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold mb-6">Our Story</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Founded in 2010, Rad Salons was born from a desire to create a sanctuary where beauty and luxury converge.
                            We believe that self-care is an art form, and every treatment is a masterpiece.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Our team of expert stylists and therapists are dedicated to providing personalized care using only the finest products.
                            Step into our world of elegance and let us reveal your inner radiance.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-serif text-gold font-bold">10+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">Years of Excellence</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif text-gold font-bold">5k+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
