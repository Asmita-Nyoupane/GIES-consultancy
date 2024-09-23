import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { PiDeviceMobile } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
const navLinks = [
    { link: "/", name: "Home" },
    { link: "/about-us", name: "About Us" },
    { link: "/test-preparation", name: "Test Preparation" },
    { link: "/services", name: "Service" },
    { link: "/study-aboard", name: "Study Aboard" },
    { link: "/courses", name: "Courses" },
    { link: "/gallery", name: "Gallery" },
    { link: "/blogs", name: "Blogs" },
    { link: "/contact", name: "Contact Us" },
];
const usefulLink = [
    { link: "/test-preparation", name: "Test Preparation" },
    { link: "/services", name: "Service" },
    { link: "/study-aboard", name: "Study Aboard" },
    { link: "/courses", name: "Courses" },
    { link: "/gallery", name: "Gallery" },
    { link: "/blogs", name: "Blogs" },
    { link: "/contact", name: "Contact Us" },
]
const contacts = [
    {
        icon: MdOutlinePhoneInTalk,
        info: "9779745432207",
    },
    {
        icon: MdMailOutline,
        info: "info@jamesabroad.com",
    },
    {
        icon: PiDeviceMobile,
        info: "+977 9821328641",
    },
    {
        icon: FaLocationDot,
        info: "Butwal, Rupandehi , Nepal",
    },
];

const socialMedia = [
    {
        image: "/assets/social-media/facebook.png",
        name: "facebook",
        link: "https://www.facebook.com",
    },
    {
        image: "/assets/social-media/instagram.jpeg",
        name: "instagram",
        link: "https://www.instagram.com",
    },
    {
        image: "/assets/social-media/whatshap.jpeg",
        name: "whatshap",
        link: "https://api.whatsapp.com",
    },
];
export { contacts, socialMedia, navLinks, usefulLink };
