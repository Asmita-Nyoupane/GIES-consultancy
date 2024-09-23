import React from 'react'
import { contacts, usefulLink } from '../Header/nav-data'
import Link from 'next/link'
import { IoSend } from 'react-icons/io5'
import { Input } from '../ui/input'

const TopFooter = () => {
    return (
        <div className='w-11/12 mx-auto py-6 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>

            <section className='space-y-5'>
                <h2 className="text-3xl font-extrabold ">GIES</h2>
                <p className='text-sm  text-gray-400'>
                    GIES is a leading study abroad consultancy based in Nepal, dedicated to helping students achieve their dreams of pursuing education overseas. With our head office strategically located in Butwal, we cater to the diverse educational needs of aspiring students across the nation.
                </p>
            </section>
            <section className='space-y-5'>
                <h2 className='text-2xl font-semibold'>Useful Links</h2>
                <div className='flex flex-col  gap-2 text-sm'>
                    {
                        usefulLink.map((link) => (
                            <Link href={link.link} className='hover:text-primaryColor hover:transition-all duration-300 ease-in-out' key={link.name}>
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section className='space-y-5'>
                <h2 className='text-2xl font-semibold'>Official Info</h2>
                <div className='flex flex-col  gap-2'>
                    {
                        contacts.map((contact, i) => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className=" font-bold text-lg">{<contact.icon />}</div>
                                <div className="text-sm">{contact.info}</div>
                            </div>

                        ))
                    }
                </div>
            </section>
            <div className="flex flex-col gap-5 ">
                <h2 className="text-2xl font-semibold">NewsLetter</h2>
                <p className="text-sm text-gray-400">Suscribe us to get the latest news  via email</p>
                <div className='flex bg-white  px-2 items-center justify-center rounded-full  shadow-md border-2 border-primaryColor '>

                    <Input type="email" placeholder="Enter Email" className="focus-visible:ring-0  border-none focus-visible:outline-0 h-full placeholder:text-gray-500 text-black" />
                    <span className="text-primaryColor font-semibold   p-2 hover:-rotate-12 hover:transition-all duration-200 ease-in-out  cursor-pointer text-xl" >
                        <IoSend />

                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopFooter