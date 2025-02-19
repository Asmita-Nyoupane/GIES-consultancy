"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "./nav-data";
import { LinkItem } from "./bottom-header";


const SideHeader = () => {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavBar = () => {
        setIsOpen(false);
    };

    return (
        <div className="sticky top-0 left-0 right-0 z-50">
            {/* Top Bar for Mobile View */}
            <div className="md:hidden flex justify-between items-center px-4 py-3 bg-gray-100">
                <Link href="/">
                    {/* <Image
                        src="/assets/logo/white-logo.png"
                        alt="logo"
                        height={40}
                        width={120}
                        quality={100}
                        priority={true}
                        className="h-[40px] w-auto object-contain"
                    /> */}
                    <h2 className="text-3xl font-extrabold text-blue-500 ">GIES</h2>
                </Link>
                <button onClick={toggleNavBar} className="text-2xl text-primaryColor hover:bg-gray-200  p-2 rounded-lg">
                    <Menu />
                </button>
            </div>

            {/* Sidebar for Mobile View */}
            <div
                className={`md:hidden fixed top-0 left-0 w-[60%] max-w-sm h-full bg-gray-100 text-black/80 z-50 flex flex-col items-start p-6 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } duration-300 ease-in-out`}
            >
                {/* Sidebar Top Section */}
                <div className="w-full flex justify-between items-center  border-b border-gray-500 pb-4  ">
                    <Link href="/">
                        {/* <Image
                            src="/assets/logo/white-logo.png"
                            alt="logo"
                            height={40}
                            width={120}
                            quality={100}
                            priority={true}
                            className="h-[40px] w-auto object-contain"
                        /> */}
                        <h2 className="text-3xl font-extrabold text-blue-500 ">GIES</h2>
                    </Link>
                    <button onClick={closeNavBar} className="text-primaryColor hover:bg-gray-200 p-2 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="w-full flex flex-col gap-3 mt-3">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            onClick={closeNavBar}
                            className={` hover:text-primaryColor transition-all duration-300 ease-in-out ${path === link.link ? "text-primaryColor font-semibold" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                </nav>
            </div>
        </div>
    );
};

export default SideHeader;
