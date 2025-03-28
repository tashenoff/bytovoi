// components/Portfolio.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Portfolio = ({ portfolioItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Значение по умолчанию для десктопа

  // Устанавливаем количество отображаемых элементов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Для мобильных устройств — 1 элемент
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Для планшетов — 2 элемента
      } else {
        setItemsToShow(3); // Для десктопа — 3 элемента
      }
    };

    // Вызов при загрузке и добавление обработчика для изменения размера окна
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= portfolioItems.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, portfolioItems.length - itemsToShow) : prevIndex - 1
    );
  };

  return (
    <div className="relative my-10">
      <div className="overflow-hidden">
        <div
          className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] lg:auto-cols-[33.33%] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {portfolioItems.map((item, index) => (
            <div className="p-2" key={index}>
              <div className="card bg-base-200 shadow-xl">
                <figure className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full" 
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full" 
        onClick={nextSlide}
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(portfolioItems.length / itemsToShow) }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === Math.floor(currentIndex / itemsToShow) 
                ? 'bg-green-500' 
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index * itemsToShow)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;