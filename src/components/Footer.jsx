import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Biz bilan bog'laning</h2>
          <p className="text-sm">Email: support@example.com | Telefon: +998 90 123 45 67</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-100 transition-colors"
            aria-label="Facebook"
          >
            <FaTelegram/>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-100 transition-colors"
            aria-label="Twitter"
          >
            <FaFacebook/>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-100 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram/>
          </a>
        </div>
        <p className="text-sm">&copy; 2024 Agro qanot. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;
