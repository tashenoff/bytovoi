// src/components/Menu.js
import Link from 'next/link';

function Menu({ items, className = '' }) {
    return (
        <ul className={`menu ${className}`}>
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Menu;