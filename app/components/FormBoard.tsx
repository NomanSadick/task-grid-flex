// components/FormBoard.tsx
import React from "react";
import Image from "next/image"; // Importing the Next.js Image component
import Form from "./Form";
import ImageForm from "./ImageForm";
import ButtonForm from "./ButtonForm";

const FormBoard: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-24 z-50">
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
        <Form />
        <ButtonForm />
        <ImageForm />
      </div>
    </div>
  );
};

export default FormBoard;
