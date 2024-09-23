import React from "react";
import { MdOutlinePhoneInTalk, MdMailOutline } from "react-icons/md";


import Link from "next/link";

import Image from "next/image";
import { socialMedia } from "./nav-data";
type Media = {
    image: string;
    name: string;
    link: string;
};

const TopHeader = () => {
    return (
        <div className="bg-primaryColor   text-white flex justify-between ">
            <div className="flex ml-8 gap-4  ">
                <div className="flex gap-2 text-md justify-center items-center py-2 ">
                    <div className="text-xl">
                        <MdOutlinePhoneInTalk />
                    </div>
                    <div > 977974543343</div>
                </div>
                <div className="flex gap-2 text-md justify-center items-center py-2 ">
                    <div className="text-xl">
                        <MdMailOutline />
                    </div>
                    <div>info@james.com</div>
                </div>
            </div>
            <div className=" flex gap-4 mr-8 justify-center items-center">
                {socialMedia.map((media: Media, i) => {
                    return (
                        <Link href={media.link} key={i}>
                            <Image
                                src={media.image}
                                alt={media.name}
                                height={30}
                                width={30}
                                quality={80}
                                className="rounded-full size-6 object-cover"
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TopHeader;
