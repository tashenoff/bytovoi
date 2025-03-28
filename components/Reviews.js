import React from 'react';

const Reviews = ({ reviews }) => {
    const getRandomRating = () => {
        return Math.floor(Math.random() * (5 - 4 + 1)) + 4; // Генерация случайного рейтинга от 4 до 5
    };

    const renderStars = (rating) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="reviews p-4">
            <h2 className="text-2xl font-bold mb-4">Отзывы</h2>
            {reviews.length === 0 ? (
                <p className="text-gray-500">Нет отзывов.</p>
            ) : (
                <ul className="space-y-4">
                    {reviews.map((review, index) => {
                        const rating = getRandomRating(); // Получение случайного рейтинга
                        return (
                            <li key={index} className="bg-base-200 p-4 rounded-lg shadow">
                                <p className="text-lg italic">&quot;{review.text}&quot;</p>
                                <p className="text-sm text-gray-600">- {review.author}</p>
                                {renderStars(rating)} {/* Отображение звездочек рейтинга */}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Reviews;
