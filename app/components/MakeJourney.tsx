import React from "react";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";

const MakeJourney = () => {
  const journeyData = [
    { id: "visa", imageSrc: "/images/Visa.png", title: "Visa" },
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
    {
      id: "customized-trip",
      imageSrc: "/images/CustomizedTrip.png",
      title: "Customized Trip",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-24 mb-16">
      <div className="w-[80%] sm:w-3/4 md:w-1/2">
        <h3 className="text-3xl font-bold text-center mb-4 py-2 px-4 max-w-96 border-2 border-blue-400 rounded-l-full rounded-r-full mx-auto text-gray-950">
          Make Your Journey
        </h3>
        <h1 className="text-4xl font-bold text-center mb-6 py-2 text-sky-300">Simple, Special, and all about You! </h1>
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
        <div className="relative">
          <Image
            src="/images/line_left.png"
            alt="Image 5"
            width={100}
            height={100}
            className="absolute left-40 w-56 h-48"
          />
          <Image
            src="/images/line_airtiket.png"
            alt="Image "
            width={100}
            height={100}
            className="absolute left-80 h-48"
          />
          <Image
            src="/images/line_turepackge.png"
            alt="Image "
            width={100}
            height={100}
            className="absolute right-80 h-48"
          />
          <Image
            src="/images/right_line.png"
            alt="Image "
            width={100}
            height={100}
            className="absolute right-40 w-56 h-48"
          />
        </div>
        <div className="relative mt-6 flex justify-center mt-40 z-50">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md flex items-center gap-2"
          >
            <FiPhone className="text-xl" />
            Get free Consultancy
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeJourney;
