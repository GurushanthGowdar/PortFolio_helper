import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { PiCopyrightFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div id="contact" className="text-white">
      <div className="flex justify-center text-center mt-6">
        <h5 className="text-center text-4xl text-lime-300">Contact</h5>
      </div>
      <div className="flex justify-between mx-auto mt-8 max-w-[400px] mt-3 sticky top-0">
        <AiFillInstagram size={40}></AiFillInstagram>
        <AiFillLinkedin size={40}></AiFillLinkedin>
        <AiFillTwitterSquare size={40}></AiFillTwitterSquare>
        <AiFillGithub size={40}></AiFillGithub>
        <AiFillFacebook size={40}></AiFillFacebook>
      </div>
      <div className="grid grid-rows-3">
        <div className="flex justify-center mt-10">
          <AiFillPhone className="mr-2" size={20}></AiFillPhone>
          <p>: +91 9538227415</p>
        </div>
        <div className="flex justify-center mt-2">
          <BiLogoGmail className="" size={20}></BiLogoGmail>
          <p className="ml-2">: guru22ca@gmail.com</p>
        </div>
        <div className="flex justify-center ">
          <PiCopyrightFill size={30}></PiCopyrightFill>
          <p className="ml-2">@Gurushantha.R.G 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
