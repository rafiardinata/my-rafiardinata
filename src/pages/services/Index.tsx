import { Button } from "@/components/ui/button";
import { CircleFadingPlus, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 py-4 px-[50px] sm:px-[120px] bg-white shadow-md z-50">
        <div className="flex items-center justify-between">
          <a href="/services" className="flex items-center gap-3">
            <img src="/images/LogoRafi.png"
              alt="Profil"
              className="sm:h-[40px] h-[30px] hover:-translate-y-1 transition duration-400"
            />
            <span className="font-semibold text-[12px] sm:text-[18px] font-700 hover:text-yellow transition-all delay-50">
              Royal Webcraft
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

          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none`}>
            <ul className="flex flex-col lg:flex-row font-700 font-medium gap-4 lg:gap-10 items-center p-4 lg:p-0">
              <li className={`hover:text-yellow transition-all delay-50 ${isActive('/services') ? 'text-yellow' : ''}`}>
                <Link to="/services">Home</Link>
              </li>
              <li className={`hover:text-yellow transition-all delay-50 ${isActive('/') ? 'text-yellow' : ''}`}>
                <Link to="/">Service Price List</Link>
              </li>
              <li className={`hover:text-yellow transition-all delay-75 ${isActive('/') ? 'text-yellow' : ''}`}>
                <Link to="/portfolio">Portfolio</Link>
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

      <main className="min-h-screen flex">

      </main>
    </>
  )
}

export default Services