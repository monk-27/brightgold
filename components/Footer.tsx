import { FaLocationArrow, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const socialMedia = [
  // {
  //   id: 1,
  //   icon: <FaFacebookF size={20} className="text-white" />,
  //   link: "https://www.facebook.com/brightgold",
  // },
  {
    id: 1,
    icon: <FaInstagram size={20} className="text-white" />,
    link: "https://www.instagram.com/brightgoldrefinery/?hl=en",
  },
  {
    id: 2,
    icon: <FaLinkedinIn size={20} className="text-white" />,
    link: "https://www.linkedin.com/in/bright-gold-9856a8232/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-yellow-500">your</span> journey
          to the next level?
        </h1>
        <a href="/contact-us">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <p className="md:text-base text-sm md:font-normal font-light">
            SEBI Registration No.: INZ000325527
          </p>
          <p className="md:text-base text-sm md:font-normal font-light mt-1">
            Trading Membership No.: 57245
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Bright Gold
        </p>
      </div>
    </footer>
  );
};

export default Footer;