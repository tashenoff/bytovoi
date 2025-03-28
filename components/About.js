// components/About.js
import React from 'react';
import SectionTitle from './SectionTitle'; // Импортируем компонент заголовка

const About = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="px-2">
        {/* Используем SectionTitle для заголовка секции */}
        <SectionTitle
          badgeText="О нас"
          badgeBgColor="bg-blue-500"
          badgeTextColor="text-white"
          title="Сервисный центр по ремонту бытовой техники"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Левая колонка */}
          <div>
            <p className="mt-4 text-left">
              При обращении в наш сервисный центр <br />
              <span className="font-bold">MasterService</span> <br />
              вы получаете гарантированно качественный ремонт бытовой техники любой сложности.
              Мы используем только оригинальные запчасти и профессиональное оборудование,
              а наши мастера имеют многолетний опыт ремонта различных типов техники.
            </p>
          </div>

          {/* Правая колонка */}
          <div>
            <p className="mt-4 text-left">
              Наша компания работает на рынке более 10 лет и ежегодно выполняет более 7000 успешных ремонтов.
              Все мастера имеют профильное образование и
              регулярно проходят курсы повышения квалификации от ведущих производителей бытовой техники.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;