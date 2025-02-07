import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const links = [
  { title: "FAQ", path: "/our-mission" },
  { title: "About", path: "/team" },
  { title: "Shipping and returns", path: "/terms-of-use" },
  { title: "Customer reviews", path: "/privacy-policy" },
];

const socialLinks = [
  {
    Icon: FaFacebook,
    path: "",
  },
  {
    Icon: FaTwitter,
    path: "",
  },
  {
    Icon: FaInstagram,
    path: "",
  },
  {
    Icon: FaLinkedin,
    path: "",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container  flex justify-between gap-0 md:text-left">
        <div className="">
          <h3 className="text-lg">LINKS</h3>
          <ul className="mt-2 space-y-2">
            {links.map((item, index) => (
              <li key={index}>
                <a className="text-gray-400 hover:text-white">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-sm  ml-auto">
          <h2 className="text-lg">SHOPHAUL</h2>
          <p className="text-gray-400 mt-2">Your one stop shop</p>
          <div className="flex flex-col mt-4">
            <h4 className="text-white uppercase">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <div className="mt-2 relative">
              <input
                type="text"
                className="border border-[#FFFFFF33] rounded-xl py-4 px-4 pr-14 focus:outline-none focus:border-blue-500 h-full bg-transparent w-full"
                placeholder="Email"
              />
              <button className="cursor-pointer bg-transparent w-fit absolute top-1/2 -translate-y-1/2 right-4">
                <IoIosArrowRoundForward size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-8 ">
        <div className="container flex justify-between w-full items-center">
          <div className="text-gray-500 text-sm ">
            &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
          </div>
          <div className="flex gap-4 items-center">
            {socialLinks.map((item, index) => (
              <a href={item.path} key={index}>
                <item.Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
