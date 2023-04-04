import Image from "next/image";
import { FaFlickr } from "react-icons/fa";
const FlickrImage = ({ image }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        className="w-full h-full"
        width="500"
        height="300"
        alt="/"
        priority
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center hover:bg-black/70 group">
        <p className="hidden text-gray-300 group-hover:block ">
          <FaFlickr size={30} />
        </p>
      </div>
    </div>
  );
};

export default FlickrImage;
