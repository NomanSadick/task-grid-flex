import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        <div className="mt-2">
          <a href="/about" className="text-blue-400 hover:underline mx-2">About Us</a>
          <a href="/contact" className="text-blue-400 hover:underline mx-2">Contact</a>
          <a href="/privacy" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
