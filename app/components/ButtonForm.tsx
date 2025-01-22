import React from "react";

const ButtonForm = () => {
  return (
    <div className="flex justify-center items-center w-full mt-6">
      <button
        type="submit"
        className="bg-orange-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md"
      >
        Submit your Query
      </button>
    </div>
  );
};

export default ButtonForm;
