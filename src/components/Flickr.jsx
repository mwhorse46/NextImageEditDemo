import { SliderData } from "./SliderData";
import FlickrImage from "./FlickrImage";

const Flickr = () => {
  return (
    <div
      className="m-2-[1240px] mx-auto text-center pb-24 pt-14
    "
    >
      <p className="text-2xl font-bold">Follow me on Flick</p>
      <p className="pb-4">@Capture</p>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-6">
        {SliderData.map((slider, index) => {
          return <FlickrImage image={slider.image} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Flickr;
