import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-3">
            Séréni<span className="text-accent">té</span>
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Luxury wellness redefined. Your sanctuary of calm awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['/services', '/booking', '/offers', '/gallery', '/about', '/contact'].map((path) => (
              <li key={path}>
                <Link to={path} className="hover:text-accent transition-colors capitalize">
                  {path.replace('/', '') || 'Home'}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 +234 800 000 0000</li>
            <li>✉️ hello@serenite.spa</li>
            <li>📍 Victoria Island, Lagos, Nigeria</li>
          </ul>
          <div className="flex gap-4 mt-5">
            {['Instagram', 'Facebook', 'Twitter'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-gray-500 hover:text-accent transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sérénité Spa. All rights reserved.
      </div>
    </footer>
  );
}
