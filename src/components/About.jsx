import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white mt-20">
      <h1 className="text-4xl font-bold text-orange-500 mb-10">Our Team</h1>
      <div className="flex flex-wrap justify-around w-full max-w-6xl mb-10">
        <div className="bg-gray-700 rounded-lg p-6 m-4 w-70 text-center shadow-lg hover:border hover:border-white transition-all">
          <h2 className="text-xl font-semibold mb-4">Sushant</h2>
          <p>Front-end Developer</p>
          <p>Back-end Developer</p>
          <p>UX/UI Designer</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 m-4 w-70 text-center shadow-lg hover:border hover:border-white transition-all">
          <h2 className="text-xl font-semibold mb-4">Tejas</h2>
          <p>Front-end Developer</p>
          <p>Back-end Developer</p>
          <p>UX/UI Designer</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 m-4 w-70 text-center shadow-lg hover:border hover:border-white transition-all">
          <h2 className="text-xl font-semibold mb-4">Aadit</h2>
          <p>Front-end Developer</p>
          <p>Back-end Developer</p>
          <p>UX/UI Designer</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-6 m-4 w-70 text-center shadow-lg hover:border hover:border-white transition-all">
          <h2 className="text-xl font-semibold mb-4">Ronit</h2>
          <p>Front-end Developer</p>
          <p>Back-end Developer</p>
          <p>UX/UI Designer</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-orange-500 mb-6">About Us</h1>
      <p className="max-w-4xl text-center mb-10 text-lg">
        Welcome to our innovative platform designed to transform the legal landscape in India by seamlessly connecting legal service providers—Advocates, Arbitrators, Mediators, Notaries, and Document Writers—with individuals and businesses seeking their expertise. Our mission is to simplify access to legal services through a user-friendly eMarketplace that fosters trust, transparency, and efficiency.
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-8">
        <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
          <FaInstagram size={40} />
        </a>
        <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
          <FaFacebook size={40} />
        </a>
        <a href="YOUR_TWITTER_LINK" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform">
          <FaTwitter size={40} />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
