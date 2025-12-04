import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    if (path) {
      navigate(path);
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top nav */}
      <nav className="absolute w-full flex justify-between items-center top-0 left-0 px-4 sm:px-6 lg:px-8 py-4 z-20">
        {/* Logo */}
        <div className="flex items-center space-x-0 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/logo.png"
            alt="Zlovr Logo"
            className="w-8 h-8 sm:w-20 sm:h-20 object-contain"
          />
          <span className="text-xl sm:text-2xl font-bold text-[#e84b64] ml-2">
            Zlovr
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-[#0000008A] font-bold text-base xl:text-lg">
          <li>
            <Link
              to="#features"
              className="hover:text-[#e84b64] transition-colors cursor-pointer"

            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#e84b64] transition-colors cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/safety"
              className="hover:text-[#e84b64] transition-colors cursor-pointer"

            >
              Safety
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="hover:text-[#e84b64] transition-colors cursor-pointer"

            >
              Support
            </Link>
          </li>


        </ul>

        <button
          className="hidden lg:block bg-gradient-to-r from-[#ee4779] to-[#fd734f] text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-bold shadow hover:scale-105 transition"
          onClick={() => handleNavClick("/login")}
        >
          Log in
        </button>


        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#e84b64] focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#fff3ea] z-40 lg:hidden">
          <div className="absolute top-4 right-4">
            <button
              onClick={handleCloseMenu}
              className="text-[#e84b64] hover:text-[#c43752] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              to="#features"

              className="text-2xl font-bold text-[#0000008A] hover:text-[#e84b64] transition-colors cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="/support"

              className="text-2xl font-bold text-[#0000008A] hover:text-[#e84b64] transition-colors cursor-pointer"
            >
              How it works
            </Link>
            <Link
              to="/about"

              className="text-2xl font-bold text-[#0000008A] hover:text-[#e84b64] transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/safety"

              className="text-2xl font-bold text-[#0000008A] hover:text-[#e84b64] transition-colors cursor-pointer"
            >
              Safety
            </Link>
            <button
              className="bg-gradient-to-r from-[#ee4779] to-[#fd734f] text-white rounded-full px-8 py-3 text-lg font-bold shadow hover:scale-105 transition"
              onClick={() => handleNavClick("/login")}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </>
  );
}