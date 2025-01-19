import React from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Beautiful Landscape",
    description: "This is an amazing view of a beautiful landscape.",
    imageUrl: "/images/Screenshot 2024-02-15 172405.png",
  },
  {
    id: 2,
    title: "Cityscape",
    description: "The vibrant city lights are mesmerizing.",
    imageUrl: "/images/Screenshot 2024-02-15 172405.png",
  },
  {
    id: 3,
    title: "Forest Pathway",
    description: "A serene pathway in the middle of a lush forest.",
    imageUrl: "/images/Screenshot 2024-02-15 172405.png",
  },
];

const Card: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-10">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="max-w-sm rounded overflow-hidden shadow-lg border mx-4"
        >
          <img className="w-full" src={card.imageUrl} alt={card.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
