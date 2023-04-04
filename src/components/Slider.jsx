import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className=" max-w-[900px] mx-auto ">
      <h1 className="p-4 text-2xl font-bold text-center">Gallery</h1>
      <div className="relative flex justify-center p-4 ">
        {data.map((slider, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-300"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />

              {index === current && (
                <Image src={slider.image} alt="/" width="1440" height="600" />
              )}
              <FaArrowAltCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
