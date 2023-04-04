const Hero = ({ message, heading }) => {
  return (
    <div className="relative flex bg-fixed  justify-center  bg-cover  bg-center items-center h-[600px] sm:h-screen text-white bg-[url('../../public/hero.png')]">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]" />
      <div className="z-[2] ml-5 sm:ml-[-10rem]">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 transition border hover:borderhover:text-black hover:border-black hover:bg-purple-300 hover:bg-opacity-20 hover:translate-x-1 ">
          Book
        </button>
      </div>
    </div>
  );
};

export default Hero;
