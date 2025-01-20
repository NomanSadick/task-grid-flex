import React from "react";
import Image from "next/image";

const MakeJourny = () => {
  const journeyData = [
    { imageSrc: "/images/AirTicket.png", title: "Air Ticket" },
    { imageSrc: "/images/TourPackages.png", title: "Tour Packages" },
    { imageSrc: "/images/Visa.png", title: "Visa" },
    { imageSrc: "/images/CustomizedTrip.png", title: "Customized Trip" },
  ];

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-center mb-8 py-2 px-4 max-w-96 border-2 border-sky-600 rounded-l-full rounded-r-full mx-auto text-gray-950">
        Make Your Journey
      </h1>
      {/* Cards */}
      <div className="relative flex flex-wrap justify-center items-center px-4">
        {journeyData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center bg-sky-800 shadow-lg py-3 border border-gray-200
            w-64 h-30
            ${
              index === 0
                ? "rounded-l-md" // Leftmost card: rounded on the left
                : index === journeyData.length - 1
                ? "rounded-r-md" // Rightmost card: rounded on the right
                : "" // Middle cards: normal rounded corners
            }`}
          >
            {/* Image */}
            <div className="relative w-10 h-10 mb-3">
              <Image
                src={card.imageSrc}
                alt={card.title}
                layout="intrinsic"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-lg text-white font-semibold">{card.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md"
        >
          Submit your Query
        </button>
      </div>
    </div>
  );
};

export default MakeJourny;