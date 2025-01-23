import { CircleFadingPlus, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const [scrolling, setScrolling] = useState(false);

    // Tambahkan event listener ketika komponen dimuat
    useEffect(() => {
        const handleScroll = () => {
            // Periksa posisi scroll, jika lebih dari 50px, ubah state
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Helper function to determine if the menu is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 py-4 px-6 md:px-12 lg:px-24 shadow-md z-50 ${isActive('/') ? 'bg-white' : scrolling ? 'backdrop-blur' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img
                        src="/images/LogoRafi.png"
                        alt="Profilku"
                        className="sm:h-[40px] h-[30px] hover:-translate-y-1 transition duration-400"
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
                        <li className={`hover:text-yellow transition-all delay-50 ${isActive('/services') ? 'text-yellow' : ''}`}>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className={`hover:text-yellow transition-all delay-75 ${isActive('/certificate') ? 'text-yellow' : ''}`}>
                            <Link to="/certificate">Certificate</Link>
                        </li>
                        <li className={`hover:text-yellow transition-all delay-50 ${isActive('/projects') ? 'text-yellow' : ''}`}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={`hover:text-yellow transition-all delay-75 ${isActive('/about') ? 'text-yellow' : ''}`}>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <a href="https://wa.me/+6281252896841" target='__blank'>
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
