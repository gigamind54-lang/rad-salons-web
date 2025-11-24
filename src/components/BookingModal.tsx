"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => {
                setStatus("idle");
                onClose();
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative bg-zinc-900 border border-gold/20 rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif font-bold text-gold mb-2">Book Appointment</h2>
                        <p className="text-gray-400 text-sm">Select your service and preferred time.</p>
                    </div>

                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Booking Confirmed!</h3>
                            <p className="text-gray-400">We'll see you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Service</label>
                                <select
                                    required
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                                >
                                    <option value="">Select a service...</option>
                                    <option value="haircut">Hair Styling</option>
                                    <option value="facial">Skin Care</option>
                                    <option value="makeup">Beauty & Makeup</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Time</label>
                                    <input
                                        type="time"
                                        required
                                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="(555) 000-0000"
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-gold-light transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Processing..." : "Confirm Booking"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
