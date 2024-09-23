import React from "react";

import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "../Header/nav-data";

const BottomFooter = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-400 border-t border-gray-700'>
            {/* Copyright Info */}
            <p className='mb-4 md:mb-0'>
                &copy; {new Date().getFullYear()}
                <span className="ml-1">
                    GIES
                </span>
                . All rights reserved.
            </p>
            <p>Powered By  <Link href="https://www.e-aribt.com/" className="hover:text-ternaryColor cursor-pointer ml-1">
                ARIBT
            </Link></p>
            {/* Terms and Privacy */}
            <div className='flex flex-wrap items-center gap-4 md:gap-8 cursor-pointer mb-4 md:mb-0 '>
                <Link href="/terms" className="hover:text-primaryColor transition-colors duration-200">
                    Terms & Conditions
                </Link>

                <Link href="/privacy" className="hover:text-primaryColor  transition-colors duration-200">
                    Privacy Policy
                </Link>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
                {socialMedia.map((media) => (
                    <Link href={media.link} key={media.name} className="hover:scale-110 transition-transform duration-200">
                        <Image
                            src={media.image}
                            alt={media.name}
                            height={24}
                            width={24}
                            className="size-6 object-cover rounded-full"
                        />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default BottomFooter;
