import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-16 px-6 py-16 w-11/12 mx-auto'>
            {/* Text Section */}
            <section className='w-full lg:w-[55%] space-y-6'>
                <header className="text-left space-y-4">
                    {/* Subtitle */}
                    <h2 className=" uppercase font-semibold text-ternaryColor">About Us</h2>

                    {/* Title */}
                    <h1 className='capitalize title'>
                        Your Trusted Partner for <span className='text-primaryColor'>Student Visa Success
                        </span>
                    </h1>


                </header>
                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm lg:text-md">
                    At James Consultancy, we take pride in being a globally recognized leader in securing student visas for students aspiring to study in prestigious institutions around the world. With extensive knowledge and years of expertise in the education and immigration sectors, we are dedicated to turning your academic dreams into reality.
                </p>
                <p className='text-gray-500 leading-relaxed text-sm lg:text-md'>
                    Whether you&apos;re aiming for undergraduate, graduate, or specialized programs, we&apos;re here to provide expert advice, resources, and support to make your overseas education journey smooth and successful. Your future begins with James Consultancy—start your journey with us today!
                </p>
            </section>

            {/* Image Section */}
            <section className='flex-1'>

                <Image
                    src={'/assets/about.png'}
                    alt='about image'
                    height={400}
                    width={400}
                    // layout='fill'
                    priority={true}
                    quality={100}
                    className=''
                />

            </section>
        </div>
    );
};

export default AboutSection;
