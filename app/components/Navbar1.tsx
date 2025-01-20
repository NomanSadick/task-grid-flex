import React from "react";

const Navbar1 = () => {
  const navItems = [
    {
      label: "All Package",
      href: "#allPackage",
      dropdown: [
        { label: "Family Package", href: "#familyPackage" },
        { label: "Adventure Package", href: "#adventurePackage" },
      ],
    },
    { label: "Visa", href: "#visa" },
    { label: "Contact", href: "#contact" },
    {
      label: "Others",
      href: "#others",
      dropdown: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
      ],
    },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TripNest</div>
      </div>
    </nav>
  );
};

export default Navbar1;
