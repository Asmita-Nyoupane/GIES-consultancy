"use client"
import React, { useEffect, useState } from 'react'

const OurCoreStrengths = () => {
    const [years, setYears] = useState(0);
    const [universities, setUniversities] = useState(0);
    const [offices, setOffices] = useState(0);

    // Function to increment numbers
    useEffect(() => {
        const incrementNumber = (setFunction: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
            let start = 0;
            const increment = target / (duration / 10); // Calculate step increment
            const interval = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(interval);
                }
                setFunction(Math.ceil(start));
            }, 10);
        };

        // Increment each number to its target value
        incrementNumber(setYears, 7, 2000);          // 7 years
        incrementNumber(setUniversities, 100, 2500); // 100 universities
        incrementNumber(setOffices, 10, 2000);       // 10 offices
    }, []);

    return (
        <section className='space-y-16 py-12 w-11/12 mx-auto'>
            <div className='flex flex-col gap-4 items-center justify-center text-center'>
                <h2 className="uppercase font-semibold text-ternaryColor tracking-wide">
                    Why Choose Us?
                </h2>
                <h1 className='text-center title text-gray-800'>
                    Key <span className='text-primaryColor'>Advantages</span> of Partnering with Us
                </h1>
            </div>

            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 text-center w-full'>
                <div className='space-y-4 '>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-teal-500">{years}+</h2>
                    <p className="text-lg font-medium text-gray-700">Years of Industry Presence</p>
                    <p className='text-md  text-gray-500  text-center'>
                        With 7 years of excellence in the education sector, we are committed to guiding students towards a successful future.
                    </p>
                </div>

                <div className='space-y-4  '>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-red-500">{universities}+</h2>
                    <p className="text-lg font-medium text-gray-700">Global University Tie-Ups</p>
                    <p className='text-md   text-gray-500'>
                        We have partnered with 100+ top universities worldwide, opening doors to diverse educational opportunities for students.
                    </p>
                </div>

                <div className='space-y-4'>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-secondaryColor">{offices}+</h2>
                    <p className="text-lg font-medium text-gray-700">Offices Worldwide</p>
                    <p className='text-md  text-gray-500'>
                        GIES Consultancy operates in 10+ locations across the globe, ensuring that students receive support wherever they are.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurCoreStrengths;
