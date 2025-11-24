"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            // Reset after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <div className="bg-zinc-900 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-gold text-black font-bold py-4 rounded-md hover:bg-gold-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                </button>
            </form>
        </div>
    );
}
