import React from 'react';
import { Card } from "@/components/ui/card";
import { studyAbroadDestinations } from './destination-data';
import Image from 'next/image';

const Destination = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center py-12 w-11/12 mx-auto">
            {/* Heading Section */}
            <header className="text-center  mx-auto space-y-2">
                <h2 className="uppercase text-ternaryColor font-semibold"> Popular Destinations</h2>
                <h1 className="capitalize title">Top Study Destinations <span className='text-primaryColor'>Around the World
                </span></h1>
                <p className="text-gray-500 ">Discover which top destinations are perfect for you to make your dreams a reality.</p>
            </header>

            {/* Card Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {studyAbroadDestinations.map((destination, index) => (
                    <Card key={index} className="p-3 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                        <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                            <Image
                                alt={destination.title}
                                src={destination.image}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-ternaryColor mb-2">{destination.title}</h3>
                        <p className="text-sm text-gray-500">{destination.subtitle}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Destination;