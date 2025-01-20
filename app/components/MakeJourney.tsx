import React from "react";
import Image from "next/image";

const MakeJourney = () => {
  const journeyData = [
    {
      id: "air-ticket",
      imageSrc: "/images/AirTicket.png",
      title: "Air Ticket",
    },
    {
      id: "tour-packages",
      imageSrc: "/images/TourPackages.png",
      title: "Tour Packages",
    },
    { id: "visa", imageSrc: "/images/Visa.png", title: "Visa" },
    {
      id: "customized-trip",
      imageSrc: "/images/CustomizedTrip.png",
      title: "Customized Trip",
    },
  ];

  return (
    <div className="w-full h-screen">
      <div>
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center mb-8 py-2 px-4 max-w-96 border-2 border-sky-600 rounded-l-full rounded-r-full mx-auto text-gray-950">
          Make Your Journey
        </h1>
        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center px-4">
          {journeyData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center bg-sky-800 shadow-lg py-3 border border-gray-200 w-64 h-30
            first:rounded-l-md last:rounded-r-md"
            >
              {/* Image */}
              <div className=" w-10 h-10 mb-3">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="intrinsic"
                  width={64}
                  height={64}
                  className="w-12 h-12"
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
    </div>
  );
};

export default MakeJourney;
