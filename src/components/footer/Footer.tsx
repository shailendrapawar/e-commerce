// components/Footer.tsx
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 w-full mt-5">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
                    {/* Column 1 - Shop */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Shop
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Sale
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 - Help */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Help
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
                    {/* Copyright */}
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>

                    {/* Social icons + language (optional) */}
                    <div className="mt-4 md:mt-0 flex items-center justify-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}