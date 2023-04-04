import Image from "next/image";
import { useState, useEffect } from "react";
import something from "./SliderData";

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await something();
      setImages(data.results);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="p-4 text-2xl font-bold">Travel Photos</h1>
      <div className="grid grid-rows-2 gap-4 m-4 lg:grid-cols-4">
        <div className="flex items-center col-span-2 row-span-2">
          {images.length > 0 ? (
            <Image
              src={images[0].urls.regular}
              alt={images[0].alt_description}
              width="650"
              height="300"
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src="/slider1.jpg"
              alt="/"
              width="650"
              height="300"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex items-center ">
          {images.length > 0 ? (
            <Image
              src={images[1].urls.regular}
              alt={images[1].alt_description}
              width="300"
              height="300"
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src="/slider2.jpg"
              alt="/"
              width="650"
              height="300"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex items-center ">
          {images.length > 0 ? (
            <Image
              src={images[2].urls.regular}
              alt={images[2].alt_description}
              width="300"
              height="300"
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src="/slider3.jpg"
              alt="/"
              width="650"
              height="300"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex items-center">
          {images.length > 0 ? (
            <Image
              src={images[3].urls.regular}
              alt={images[3].alt_description}
              width="300"
              height="300"
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src="/slider4.jpg"
              alt="/"
              width="650"
              height="300"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex items-center ">
          {images.length > 0 ? (
            <Image
              src={images[4].urls.regular}
              alt={images[4].alt_description}
              width="300"
              height="300"
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src="/slider5.jpg"
              alt="/"
              width="650"
              height="300"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
