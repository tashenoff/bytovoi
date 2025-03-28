// components/SectionTitle.js
import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge'; // Импортируем компонент Badge

// Обновленный SectionTitle с поддержкой кастомизации Badge и цвета заголовка
const SectionTitle = ({ title, titleColor = 'text-gray-800', description, badgeText, badgeBgColor, badgeTextColor, className = '' }) => {
  return (
    <div className={`text-left py-10 ${className}`}>
      {/* Отображаем Badge, если передан badgeText */}
      {badgeText && (
        <Badge bgColor={badgeBgColor} textColor={badgeTextColor} className="my-5">
          {badgeText}
        </Badge>
      )}

      {/* Заголовок */}
      <h2 className={`text-3xl lg:text-4xl mt-3 font-bold ${titleColor}`}>
        {title}
      </h2>

      {/* Описание (если передано) */}
      {description && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired, // Заголовок обязателен и должен быть строкой
  titleColor: PropTypes.string, // Цвет заголовка необязателен и должен быть строкой
  description: PropTypes.string, // Описание необязательно и должно быть строкой
  badgeText: PropTypes.string, // Текст бейджа необязателен и должен быть строкой
  badgeBgColor: PropTypes.string, // Цвет фона бейджа необязателен и должен быть строкой
  badgeTextColor: PropTypes.string, // Цвет текста бейджа необязателен и должен быть строкой
  className: PropTypes.string, // Дополнительные классы необязательны и должны быть строкой
};

export default SectionTitle;