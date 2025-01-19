import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to TripNest Limited
          </h1>
          <p className="text-lg">
            Travel way.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded shadow hover:bg-gray-100">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-white rounded hover:bg-white hover:text-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img
            src="/images/Screenshot 2024-02-15 172405.png"
            alt="Hero Illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
