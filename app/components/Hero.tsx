import React from "react";
import Image from "next/image";

const Hero = () => {
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
    <div className="w-full h-screen flex justify-center items-center bg-sky-200">
      <div className="w-[80%] sm:w-3/4 md:w-1/2 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 py-2 px-4 max-w-96 border-2 border-blue-400 rounded-l-full rounded-r-full mx-auto text-gray-950">
          Make Your Journey
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-gray-900">
          {journeyData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center bg-sky-800 shadow-lg py-3 border border-gray-200 h-32
              first:rounded-l-md last:rounded-r-md"
            >
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
              <p className="text-lg text-white font-semibold">{card.title}</p>
            </div>
          ))}
        </div>
        <p className="text-black text-center leading-relaxed bg-orange-300"></p>
      </div>
    </div>
  );
};

export default Hero;
