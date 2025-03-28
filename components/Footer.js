import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-blue-500 text-white py-10 overflow-hidden">
      {/* Листья (Before & After) */}
     

      <div className="container mx-auto my-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Категории */}
          <div>
            <h3 className="text-lg font-bold mb-4">КАТЕГОРИИ</h3>
            <ul className="space-y-2">
              <li><Link href="/cleaning">Уборка</Link></li>
              <li><Link href="/maintenance">Тех. обслуживание</Link></li>
              <li><Link href="/industrial">Промышленный клининг</Link></li>
            </ul>
          </div>

          {/* Для клиента */}
          <div>
            <h3 className="text-lg font-bold mb-4">ДЛЯ КЛИЕНТА</h3>
            <ul className="space-y-2">
              <li><Link href="/about">О нас</Link></li>
              <li><Link href="/services">Наши услуги</Link></li>
              <li><Link href="/advantages">Преимущества</Link></li>
              <li><Link href="/faq">Вопросы</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-2">
              <li>Номер телефона: <a href="tel:+77718721585" className="hover:text-gray-400">+77718721585</a></li>
             
            </ul>
            <a
              href="https://wa.me/77718721585"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-10 text-center border-t border-white pt-6">
          <p>©2025 MasterService</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
