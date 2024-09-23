"use client";
import React, { useState } from "react";
import { Carousel } from "antd";
import { bannerImages } from "./banner-images";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
    const [isLoading, setLoading] = useState(true)
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (

        <Carousel
            afterChange={onChange}
            autoplay={true}
            arrows={false}
            infinite={true}
            dots={false}
            autoplaySpeed={3000}
            effect="fade" // Adds fade transition
        >
            {bannerImages.map((pic, index) => (
                <div key={index} className="relative  h-[540px] ">

                    {
                        isLoading && <div className="bg-gray-600 h-full w-full">
                        </div>
                    }
                    <Image
                        src={pic.image}
                        alt={pic.name}
                        height={1000}
                        width={1000}
                        onLoad={() => setLoading(false)}
                        priority={index == 0}
                        layout="responsive"
                        className="object-cover brightness-50 "
                    />

                    {/* Text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                            <span className="text-orange-500">
                                Empowering
                            </span> Dreams, One <span className="text-orange-500">Destination
                            </span> at a Time
                        </h1>
                        <p className="text-white text-lg md:text-2xl mb-6">
                            Your trusted partner in achieving global education and career aspirations.
                        </p>
                        <div className="flex gap-6">
                            <Button className="bg-blue-500 text-white hover:transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-600">
                                Apply Now
                            </Button>
                            <Button className=" border-2 border-orange-500 bg-transparent hover:bg-orange-500 hover:transition-all duration-300 ease-in-out hover:scale-110">
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HeroSection;
