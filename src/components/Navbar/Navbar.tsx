"use client";

import { Globe, Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 700) {
        setNavSticky(true);
      }
      if (window.scrollY <= 700) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const stickyStyle = navSticky
    ? " backdrop-blur-sm shadow-black/20 shadow-sm transition-all duration-500"
    : "";

  const navOpenStyle = navSticky
    ? "translate-y-0 transition-all duration-300"
    : "translate-y-[-100%] transition-all duration-300";
  const openNav = isOpen ? "translate-y-0" : "translate-y-[-100%]";

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Pastikan elemen yang diklik bukan bagian dari navbar
      if (
        isOpen &&
        !event
          .composedPath()
          .some((el) => (el as HTMLElement).id === "navbar-menu")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-[100%]  ${stickyStyle} ${navOpenStyle} bg-white  transition-all  z-10`}
    >
      <div className="mx-auto px-6 md:px-12 lg:px-16 xl:px-36">
        <div
          className="relative flex justify-between  items-center h-16"
          id="navbar-menu"
        >
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="navbar-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <p className="text-secondary text-xl font-bold font-serif navbar__link relative ">
                  Kabar
                  <span className="text-merah">Kita</span>
                </p>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex md:space-x-4">
                <Link href="/">
                  <p className="text-black px-3 py-2 rounded-md md:text-sm text-xs md:font-medium ">
                    Beranda
                  </p>
                </Link>
                <Link href="/artikel">
                  <p className="text-black px-3 py-2 rounded-md md:text-sm text-xs md:font-medium">
                    Artikel
                  </p>
                </Link>
                <Link href="/">
                  <p className="text-black pl-3 py-2 rounded-md md:text-sm text-xs md:font-medium">
                    Buku Koleksi
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden relative z-[100]" id="navbar-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 absolute bg-gray-700 w-full ">
            <Link href="/#">
              <p className="text-black hover:bg-gray-400 hover:text-white  block px-3 py-2 rounded-md text-base font-medium ">
                Beranda
              </p>
            </Link>
            <Link href="/artikel">
              <p className="text-black hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Artikel
              </p>
            </Link>

            <Link href="/#">
              <p className="text-black hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Buku Koleksi
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
