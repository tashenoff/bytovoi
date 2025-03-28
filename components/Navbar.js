import React from 'react';
import PhoneNumber from './PhoneNumber';
import Menu from './Menu';
import Link from 'next/link';
// import { useScroll } from '../hooks/useScroll';
function Navbar() {
  
  // const isScrolled = useScroll();

    const menuItems = [
        { href: "/", label: 'Главная' },
        { href: "/services", label: 'Услуги' },
        { href: "/about", label: 'О нас' },
        { href: "/contacts", label: 'Контакты' },
    ];

    return (
      <nav className="navbar bg-opacity-70 backdrop-blur-md shadow-md bg-white border-b border-white border-opacity-15 top-0 w-full z-50 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Логотип */}
                <Link href="/">
                    <img className="w-[200px] lg:block" src="/img/logo.svg" alt="Logo" />
                </Link>
                
                {/* Мобильное меню с Drawer */}
                <div className="lg:hidden">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            
                            {/* Фиксированный контейнер для меню */}
                            <div className="menu bg-blue-800/50 backdrop-blur-lg text-white p-4 w-64 h-screen flex flex-col relative">
                                <Menu items={menuItems} />

                                {/* Фиксируем телефон внизу меню */}
                                <div className="mt-auto bg-blue-900 p-4">
                                    <PhoneNumber />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Десктопное меню */}
                <div className="navbar-center hidden lg:flex justify-start">
                    <Menu items={menuItems} className="menu-horizontal px-1" />
                </div>

                {/* Контакты (только для десктопа) */}
                <div className="hidden lg:flex gap-4">
                    <PhoneNumber />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;