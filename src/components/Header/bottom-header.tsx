"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-data";


export type LinkItem = {
    name: string;
    link: string;
};
const BottomHeader = () => {
    const path = usePathname();
    return (
        <div className=" sticky  top-0 left-0 right-0 shadow-md z-50  bg-[#F8F8F8]">
            <div className=" hidden xl:flex justify-between items-center container mx-auto  h-16 ">
                <div className=" flex items-center justify-center ">
                    {/* <Image
                        src={"/Logo/lopho-abroad.png"}
                        alt="logo/"
                        height={140}
                        width={140}
                        quality={100}
                        priority={true}
                        className="h-[100px] w-[160px]"
                    /> */}
                    <h2 className="text-3xl font-extrabold text-blue-500 ">GIES</h2>
                </div>
                <div className="flex gap-3  items-center justify-center  text-sm">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className={`rounded-md py-2 px-2  hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105    ${path === link.link ? " font-semibold  text-blue-500" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default BottomHeader;
