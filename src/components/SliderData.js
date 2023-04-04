import axios from "axios";

const something = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: "nature",
      per_page: 5,
      page: Math.floor(Math.random() * 100) + 1,
      client_id: process.env.NEXT_PUBLIC_KEY,
    },
  });
  const data = response.data;
  return data;
};

export const SliderData = [
  {
    image: "/slider1.jpg",
  },
  {
    image: "/slider2.jpg",
  },
  {
    image: "/slider3.jpg",
  },
  {
    image: "/slider4.jpg",
  },
  {
    image: "/slider5.jpg",
  },
  {
    image: "/hero.png",
  },
];

export default something;
