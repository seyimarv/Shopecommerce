import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container  flex justify-between gap-8 text-center md:text-left">
        {/* Logo & Description */}

        {/* Navigation Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        {/* <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div> */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">MyCompany</h2>
          <p className="text-gray-400 mt-2">
            Illuminate your journey with brilliance, one star at a time. Because
            every rating is more than just a number—its a reflection of
            excellence, a testament to quality, and a symbol of trust. Whether
            celebrating greatness or striving for improvement, each star tells a
            story of experience, passion, and dedication. Let your ratings shine
            and inspire others to reach for the stars!
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-8">
        <div className="container container text-gray-500 text-sm ">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
