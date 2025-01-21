// components/FormBoard.tsx
import React from "react";
import Image from "next/image"; // Importing the Next.js Image component

const FormBoard: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center mt-24 z-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-sky-800">
          Travel, Your Way!
        </h1>
        <div className="relative">
          <Image
            src="/images/cosma.svg"
            alt="Cosma"
            width={40}
            height={40}
            className="absolute top-[-16px] right-0 rounded-full"
          />
          <h2 className="text-2xl font-medium text-gray-600 mt-6">
            Customize Your Journey
          </h2>
        </div>
      </div>
      <div className="relative bg-white shadow-lg border border-gray-300 p-6 rounded-lg w-full max-w-4xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <input
              type="text"
              id="nameField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="serviceField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Service"
            />
          </div>
          <div>
            <input
              type="text"
              id="phoneField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Phone"
            />
          </div>
          <div>
            <input
              type="text"
              id="emailField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          {/* Right Column */}
          <div>
            <input
              type="text"
              id="destinationField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Destination"
            />
          </div>
          <div>
            <input
              type="text"
              id="travelCountField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Number of travels"
            />
          </div>
          <div>
            <input
              type="text"
              id="travelDateField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Travel Date"
            />
          </div>
          <div>
            <input
              type="text"
              id="notesField"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Additional Notes"
            />
          </div>
        </form>
        <div className="flex justify-center items-center w-full mt-6">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md"
          >
            Submit your Query
          </button>
        </div>

        <Image
          src="/images/camera.png"
          alt="Image 5"
          width={100}
          height={100}
          className="absolute top-16 -left-60 -z-20 w-12 h-12"
        />
        <Image
          src="/images/PaperPlane.png"
          alt="Image 5"
          width={100}
          height={100}
          className="absolute top-36 -left-32 z-0 w-12 h-12"
        />

        <Image
          src="/images/bag.svg"
          alt="Image 1"
          width={100}
          height={100}
          className="absolute -top-24 -left-24 -z-20 w-40 h-40"
        />
        <Image
          src="/images/umbrella.svg"
          alt="Image 2"
          width={100}
          height={100}
          className="absolute -top-24 -right-24 -z-20 w-40 h-40"
        />
        <Image
          src="/images/Navigator.png"
          alt="Image 2"
          width={100}
          height={100}
          className="absolute top-20 -right-36 -z-20 w-12 h-12"
        />
        <Image
          src="/images/book.svg"
          alt="Image 3"
          width={100}
          height={100}
          className="absolute -bottom-24 -left-24 -z-20 mx-auto w-40 h-40"
        />

        <Image
          src="/images/plain.svg"
          alt="Image 4"
          width={100}
          height={100}
          className="absolute -bottom-24 -right-24 -z-20 mx-auto w-40 h-40"
        />
      </div>
    </div>
  );
};

export default FormBoard;
