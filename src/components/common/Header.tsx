import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import routes from '../../routes';

const Header: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation();
const navigation = routes.filter(route => route.visible !== false);

return (
    <header className="bg-white shadow-md sticky top-0 z-10">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
            {/* Please replace with your website logo */}
            <img
                className="h-8 w-auto"
                src={`https://miaoda-site-img.cdn.bcebos.com/placeholder/code_logo_default.png`}
                alt="Website logo"
            />
            {/* Please replace with your website name */}
            <span className="ml-2 text-xl font-bold text-blue-600">Website Name</span>
            </Link>
        </div>

        {/* When there's only one page, you can remove the entire navigation section */}
        <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
            <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-base font-medium rounded-md ${
                location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                } transition duration-300`}
            >
                {item.name}
            </Link>
            ))}
        </div>
        </div>
    </nav>
    </header>
);
};

export default Header;