import React from "react";
import Image from "next/image"; 
const ImageForm = () => {
  return (
    <div>
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
  );
};

export default ImageForm;
