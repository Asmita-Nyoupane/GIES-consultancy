import React from 'react';

import { Card } from '@/components/ui/card';
import { ContactForm } from './contact-form';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className='space-y-8 w-11/12 mx-auto '>
            <div className='flex flex-col gap-3 items-center justify-center'>

                <h2 className="text-center uppercase font-semibold text-ternaryColor">Get in Touch</h2>
                <h1 className='title capitalize text-center max-w-4xl'>
                    We&apos;d Love to <span className='text-primaryColor leading-9'>Hear from You</span>
                </h1>
                <p className='text-sm text-gray-500 text-center max-w-4xl'>
                    Have any questions or need assistance? Reach out to us by filling in the form below, and our team will respond promptly to assist you.
                </p>

            </div>
            <div className=" flex flex-col md:flex-row gap-10 ">
                {/* Google Map Section */}
                <section className=" flex items-center justify-center md:w-[48%] h-[400px] lg:h-auto">
                    <Image className=" object-cover   overflow-hidden "
                        src={'/assets/contact.png'}
                        alt='contact-image'
                        width={400}
                        height={400}

                    />


                </section>

                {/* Contact Form Section */}
                <section className="flex-1">
                    <Card className="px-6 py-10 shadow-lg rounded-lg">

                        <ContactForm />
                    </Card>
                </section>
            </div>
        </section>
    );
};

export default Contact;
