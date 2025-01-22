import React from "react";

const Form = () => {
  return (
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
  );
};

export default Form;
