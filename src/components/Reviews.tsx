import { Star } from "lucide-react";

const reviews = [
    {
        name: "Sophia Martinez",
        role: "Regular Client",
        content: "The best salon experience I've ever had. The staff is incredibly professional and the atmosphere is pure luxury.",
        rating: 5,
    },
    {
        name: "James Anderson",
        role: "New Customer",
        content: "I came in for a haircut and left feeling like a new person. The attention to detail is unmatched.",
        rating: 5,
    },
    {
        name: "Emily Chen",
        role: "Beauty Enthusiast",
        content: "Their skin treatments are a game changer. My skin has never looked better. Highly recommend!",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section className="py-20 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold mb-4">Client Testimonials</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our valued clients have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-zinc-900 p-8 rounded-lg border border-white/5 hover:border-gold/30 transition-colors">
                            <div className="flex gap-1 mb-4 text-gold">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{review.content}"</p>
                            <div>
                                <h4 className="font-bold text-white">{review.name}</h4>
                                <p className="text-sm text-gold">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
