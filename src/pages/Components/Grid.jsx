import Image from 'next/image';
import React from 'react';

export default function Grid ()  {

  const images = [];
  for (let i = 17; i <= 67; i++) {
    images.push(`(${i}).jpg`);
  }

  // Function to generate a random height and width for each image
  const getRandomSize = () => {
    const height = Math.floor(Math.random() * 500) + 200;
    const width = Math.floor(Math.random() * 500) + 200;
    return { height, width };
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => {
        const { height, width } = getRandomSize();
        return (
          <div key={index} className="relative">
            <Image
              src={require(`../../../public/images/${image}`)}
              alt="Gallery image"
              className="rounded-lg w-full h-full bg-fontColor "
           
            />
          </div>
        );
      })}
    </div>
  );
}

