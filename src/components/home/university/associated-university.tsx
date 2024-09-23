
"use client"
import React from 'react';

import Image from 'next/image';
import { universityData } from './university-data';



const AssociatedUniversity = () => {


    return (
        <div className="flex flex-wrap justify-center space-x-8 px-6 py-10">
            <div className="flex overflow-hidden  space-x-10 sm:space-x-16 group   mx-auto">
                <div className="flex space-x-10 sm:space-x-16 animate-loop-scroll  group-hover:paused"   >
                    {
                        universityData.map((type, index) => (
                            <div key={index}>

                                <Image
                                    src={type.image}
                                    alt={type.name}
                                    width={100}
                                    height={100}
                                    loading='lazy'
                                    className="max-w-none "
                                />

                            </div>

                        ))
                    }

                </div>
                <div

                    className="flex space-x-10 sm:space-x-16 animate-loop-scroll  group-hover:paused" aria-hidden="true"  >
                    {
                        universityData.map((type, index) => (

                            <div key={index}>

                                <Image
                                    src={type.image}
                                    alt={type.name}
                                    width={100}
                                    height={100}
                                    loading='lazy'
                                    className="max-w-none "
                                />

                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default AssociatedUniversity;
