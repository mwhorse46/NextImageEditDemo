import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of the recent work by this organization."
      />
      <Portfolio />
    </div>
  );
};

export default work;
