import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import DownloadSection from './DownloadSection';

export default function Footer() {
  return (
    <>
        <DownloadSection />
        <footer className="bg-gray-900 text-gray-300 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
                <div>
                    <h3 className="text-white font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Minis</li>
                        <li>Pyng</li>
                        <li>Contact us</li>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>

                <div>
                <h3 className="text-white font-semibold mb-3">Legal</h3>
                <ul className="space-y-2">
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>

                <div>
                <h3 className="text-white font-semibold mb-3">Available in</h3>
                <ul className="space-y-2">
                    <li>bangalore</li>
                    <li>gurgaon</li>
                    <li>hyderabad</li>
                    <li>delhi</li>
                    <li>mumbai</li>
                    <li>pune</li>
                    <li>685 cities</li>
                </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Life at Swiggy</h3>
                    <ul className="space-y-2">
                        <li>Explore with Swiggy</li>
                        <li>Swiggy News</li>
                        <li>Snackables</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Social Links</h3>
                    <div className="flex space-x-4 text-xl">
                        <FaLinkedin />
                        <FaInstagram />
                        <FaFacebook />
                        <FaPinterest />
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-xs">
                © 2025 Swiggy Limited
            </div>
        </footer>
    </>
  )
}
