"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Card } from "../../ui/card";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { blogPosts } from "./blog-data";

const OurBlogs = () => {
    return (
        <section className="w-11/12 mx-auto space-y-12">
            {/* Top Section */}
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="uppercase font-semibold text-ternaryColor">
                    Latest Blog
                </h2>
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
                    GIES Educational Consultancy <span className="text-primaryColor">Blog & Updates</span>
                </h1>
                <p className="text-md md:w-[70%] text-gray-500">
                    Discover the latest insights, expert advice, and updates on study abroad opportunities, university admissions, scholarships, and educational trends from GIES Educational Consultancy.
                </p>
            </div>

            {/* blog Grid */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
                {blogPosts.map((blog, i) => (
                    <Link href={`/`} key={i}>
                        <Card className="flex flex-col gap-4 shadow-lg rounded-xl bg-white hover:shadow-xl  h-[420px]   transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl">
                            <div className="relative   w-full p-4">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    height={300}
                                    width={300}

                                    className="rounded-lg object-cover h-56 md:h-48 w-full"
                                />
                            </div>
                            <div className="space-y-3 px-6 pb-6  ">
                                <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
                                    {blog.title}
                                </h2>
                                <p className="text-sm text-gray-500 line-clamp-3">{blog.summary}</p>
                                <p className="text-sm text-secondaryColor mt-2">
                                    {blog.datePosted} | By {blog.author}
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
            {/* View All Button */}
            <div className='flex justify-center items-center mt-8'>
                <Button
                    size={'lg'}
                    className='flex items-center text-primaryColor hover:text-white font-semibold hover:bg-primaryColor border-2 border-primaryColor bg-transparent py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
                >
                    View All <span className='ml-2'><MoveRight /></span>
                </Button>
            </div>
        </section>
    );
};

export default OurBlogs;
