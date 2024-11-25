import { CircleFadingPlus, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Helper function to determine if the menu is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white py-4 px-6 md:px-12 lg:px-24 shadow-md z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/images/Profil.jpg"
                        alt="Profilku"
                        className="rounded-full sm:h-[40px] border-2 border-yellow h-[30px] hover:-translate-y-1 transition duration-400"
                    />
                    <span className="font-semibold text-[12px] sm:text-[18px] font-700 hover:text-yellow transition-all delay-50">
                        Rafi Ardinata Riskiansyah
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden block"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-yellow" />
                    ) : (
                        <Menu className="w-6 h-6 text-yellow" />
                    )}
                </button>

                {/* Menu */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } lg:block absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}
                >
                    <ul className="flex flex-col lg:flex-row font-700 font-medium gap-4 lg:gap-10 items-center p-4 lg:p-0">
                        <li className={`hover:text-yellow transition-all delay-50 ${isActive('/') ? 'text-yellow' : ''}`}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={`hover:text-yellow pointer-events-none opacity-25 transition-all delay-75 ${isActive('/services') ? 'text-yellow' : ''}`}>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className={`hover:text-yellow transition-all delay-50 ${isActive('/projects') ? 'text-yellow' : ''}`}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={`hover:text-yellow pointer-events-none opacity-25 transition-all delay-75 ${isActive('/about') ? 'text-yellow' : ''}`}>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <a href="https://wa.me/081252896841" target='__blank'>
                                <Button>
                                    <CircleFadingPlus className="w-5 text-white" />
                                    <span>Hire Me</span>
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
