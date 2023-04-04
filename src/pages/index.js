import Head from "next/head";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Flickr from "@/components/Flickr";
import Link from "next/link";

export default function Home() {
  const homeBody = {
    container:
      "absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen p-4 text-4xl bg-black sm:hidden",
    hidden: "translate-x-full opacity-0",
    visible: "translate-x-0 opacity-100",
    transition: "transform duration-300 ease-in-out",
    link: "inline-block bg-gray-100 mt-3"
  };

  return (
    <>      
      <div className={homeBody.link}>
        <Link href="/work">Enter site</Link>
      </div>      
    </>
  );
}
