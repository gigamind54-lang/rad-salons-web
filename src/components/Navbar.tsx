"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-serif font-bold text-gold">
                            Rad Salons
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#home" className="text-white hover:text-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>
                            <Link href="#services" className="text-white hover:text-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                Services
                            </Link>
                            <Link href="#about" className="text-white hover:text-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </Link>
                            <Link href="#contact" className="text-white hover:text-gold transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </Link>
                            <button className="bg-gold text-black px-6 py-2 rounded-full font-medium hover:bg-gold-light transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#home" className="text-white hover:text-gold block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="#services" className="text-white hover:text-gold block px-3 py-2 rounded-md text-base font-medium">
                            Services
                        </Link>
                        <Link href="#about" className="text-white hover:text-gold block px-3 py-2 rounded-md text-base font-medium">
                            About
                        </Link>
                        <Link href="#contact" className="text-white hover:text-gold block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </Link>
                        <button className="w-full text-left bg-gold text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gold-light mt-4">
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
