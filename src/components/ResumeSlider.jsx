import React from "react";
import Slider from "react-slick";
import { FaFigma } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { id: 1, title: "Modern Resume / CV", price: "10$", image: "/resume1.png" },
  { id: 2, title: "Creative Resume / CV", price: "10$", image: "/resume2.png" },
  { id: 3, title: "Professional Resume", price: "10$", image: "/resume3.png" },
  { id: 4, title: "Sleek Resume / CV", price: "10$", image: "/resume4.png" },
  { id: 5, title: "Minimalist Resume", price: "10$", image: "/resume5.png" },
];

export default function ResumeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Buy Me a Coffee
      </h2>

      <div className="w-full max-w-5xl px-4">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="p-3">
              <div className="bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-lg shadow"
                />
                <p className="text-gray-700 mt-3 text-sm">
                  Modern Resume / CV Template
                </p>
                <div className="flex items-center mt-2">
                  <FaFigma className="text-blue-600 text-lg" />
                  <span className="ml-2 text-gray-600 text-sm">Design</span>
                </div>
                <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-black">
                    {item.price}
                  </span>
                  <button className="bg-yellow-400 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-500 transition">
                    Purchase Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
