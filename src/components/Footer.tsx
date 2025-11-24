import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-zinc-900 text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold text-gold mb-4 block">
                            Rad Salons
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating beauty standards with premium services and luxurious care. Experience the difference today.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#home" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-gold transition-colors">Services</Link></li>
                            <li><Link href="#about" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>123 Luxury Lane</li>
                            <li>Beverly Hills, CA 90210</li>
                            <li>(555) 123-4567</li>
                            <li>info@radsalons.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Rad Salons. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
