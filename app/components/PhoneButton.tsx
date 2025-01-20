import React from 'react';

const PhoneButton: React.FC = () => {
  return (
    <button
      className="relative flex items-center pl-6 pr-5 py-4 bg-blue-500 text-white font-semibold text-lg rounded-full hover:bg-blue-600 transition-all"
    >
      {/* Circle with Phone Icon */}
      <div className="absolute -left-4 flex items-center justify-center w-12 h-12 bg-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h2a1 1 0 01.993.883L6 11v2a1 1 0 01-.883.993L5 14H3a1 1 0 01-.993-.883L2 13v-2a1 1 0 01.883-.993L3 10zm16-1a1 1 0 01.993.883L20 10v4a1 1 0 01-.883.993L19 15h-3a1 1 0 01-.993-.883L15 14v-4a1 1 0 01.883-.993L16 9h3zM7 5a1 1 0 011-1h8a1 1 0 011 1v14a1 1 0 01-1 1H8a1 1 0 01-1-1V5z"
          />
        </svg>
      </div>
      {/* Text */}
      <span className="ml-10">Get Free Consultancy</span>
    </button>
  );
};

export default PhoneButton;
