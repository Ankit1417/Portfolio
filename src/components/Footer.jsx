import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">Ankit Gupta</p>
          <p className="text-gray-300 mb-4">Data Analyst & Full Stack MERN Developer</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ankit Gupta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
