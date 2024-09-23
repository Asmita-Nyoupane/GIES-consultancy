


import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { giesConsultancyServices } from './service-data';


const OurService = () => {
    return (
        <section className='space-y-12 py-16'>
            <div className='flex flex-col gap-4 items-center justify-center text-center'>
                <h2 className="text-center uppercase font-semibold text-ternaryColor">
                    Why Choose GIES Consultancy?
                </h2>
                <h1 className='title capitalize text-center w-11/12 mx-auto'>
                    Your Trusted Partner for <span className='text-primaryColor'>Studying Abroad</span>
                </h1>
                <p className='text-center text-md text-gray-500 md:w-[70%] leading-relaxed'>
                    Unlock your potential with GIES Consultancy. We specialize in providing tailored guidance for your study abroad journey, ensuring a smooth application process and high visa success rates.
                </p>
            </div>
            <div className='flex flex-wrap  gap-4 sm:gap-8 justify-center items-center w-11/12 mx-auto'>
                {giesConsultancyServices.map((service, i) => (


                    <Card key={i} className='flex flex-col gap-4 items-center py-3 justify-center shadow-md rounded-lg  w-[250px] sm:h-[240px] overflow-hidden transition transform hover:scale-105 hover:shadow-lg  duration-300 ease-in-out'>
                        <div className='flex justify-center items-center   bg-pink-100 p-4 rounded-full'>
                            <Image
                                src={service.image}
                                alt={service.serviceName}
                                height={200}
                                width={200}
                                className='rounded-md size-10'
                            />
                        </div>
                        <h1 className='sm:text-lg font-semibold text-center text-gray-800'>
                            {service.serviceName}
                        </h1>
                        <p className='text-sm text-gray-500   px-4 '>
                            {service.description}
                        </p>
                    </Card>

                ))}
            </div>
        </section>
    );
};

export default OurService;