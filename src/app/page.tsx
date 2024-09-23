import AboutSection from "@/components/about/about";
import Destination from "@/components/destination/destination";
import OurBlogs from "@/components/home/blogs/our-blogs";
import Contact from "@/components/home/contact/contact";
import OurCoreStrengths from "@/components/home/core/our-core";
import HeroSection from "@/components/home/hero-section";
import Testimonials from "@/components/home/testimonial/testimonial";
import AssociatedUniversity from "@/components/home/university/associated-university";
import OurService from "@/components/service/our-service";


export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <section className="bg-gray-50">
        <AboutSection />
      </section>
      <OurCoreStrengths />
      <section className="bg-gray-100 py-12 space-y-16 ">
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h2 className="uppercase font-semibold text-gray-700">Partner Universities</h2>
          <h1 className="title capitalize text-center text-gray-800">
            Explore Our <span className="text-primaryColor w-11/12 mx-auto">Global University Network</span>
          </h1>
          <p className="text-gray-500 text-md text-center w-[80%] mx-auto">
            Discover top universities from around the world, offering students a wide range of academic opportunities and pathways for a brighter future. Study abroad and gain a global perspective in education.
          </p>
        </div>
        <AssociatedUniversity />
      </section>
      <Destination />
      <section className="bg-gray-50">
        <OurService />
      </section>
      <OurBlogs />
      <section className="bg-gray-50">
        <Testimonials />
      </section>
      <Contact />
    </div>
  );
}
