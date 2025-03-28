import React from 'react';
import SectionTitle from './SectionTitle'; // Импортируем компонент Badge

// Компонент для шага
const Step = ({ number, title, description, isLast }) => {
    return (
        <div className="text-left w-full md:w-1/3">
            <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-white text-green-600 flex items-center justify-center rounded-full text-lg font-bold">
                    {number}
                </span>
                {!isLast && <div className="h-1 bg-white flex-1 hidden md:block"></div>}
            </div>
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-sm mt-2">{description}</p>
        </div>
    );
};

// Основной компонент Steps
const Steps = () => {
    const stepsData = [
        {
            number: 1,
            title: 'Оставляете заявку',
            description: 'Оставляете заявку на нашем сайте. Вся информация конфиденциальна и закрыта.',
        },
        {
            number: 2,
            title: 'Звонок',
            description: 'Наш менеджер свяжется с вами в ближайшее время и рассчитает стоимость заказа.',
        },
        // Добавьте больше шагов по необходимости
    ];

    return (
        <section className="bg-green-600 text-white py-14">
            <div className="container mx-auto my-10">
                {/* Заголовок */}
                <div className="mb-8">
                    <SectionTitle
                        badgeText="steps"
                        badgeBgColor="bg-white"
                        badgeTextColor="text-green-500"
                        titleColor={"white"}
                        title="Как мы работаем?"
                        
                    />
                </div>

                {/* Линия шагов */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {stepsData.map((step, index) => (
                        <Step
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            isLast={index === stepsData.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;