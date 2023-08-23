import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white" data-aos="zoom-in" data-aos-duration="1000">
      <div className="text-center flex flex-col max-w-[700px] mx-auto h-full mt-[80px]">
        <h2 className="text-[#00df9a] mb-2 text-bold text-5xl font-bold">
          Hello , I am Gurushantha R G
        </h2>
        <Typed
          strings={[
            "Full-Stack Developer",
            "App Developer",
            "Web Developer",
            "Software engineer",
            "Freelancer",
          ]}
          loop
          className="mb-5 text-2xl"
          typeSpeed={100}
          backSpeed={60}
        ></Typed>
        <p className="text-lime-500 text-xl">
          A passionate tech enthusiast hailing from India, proficient in full
          stack web and app development, with a proven track record of turning
          innovative ideas into functional, user-friendly digital solutions.
          With a keen eye for detail and a knack for problem-solving, I am
          constantly exploring new technologies and methodologies to enhance the
          digital landscape. My addiction to the world of coding fuels my
          insatiable desire to create and innovate. Every day is a new
          opportunity for me to delve into the art of building, as I indulge my
          curiosity and drive to stay at the forefront of technology trends.
          Whether it's diving into the latest front-end frameworks, mastering
          back-end architecture, or experimenting with emerging mobile app
          development tools, I relish the challenges that come with pushing the
          boundaries of what's possible.
        </p>
        <div className="flex text-center mx-auto  justify-between mt-3">
          <button className="m-4 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Hire Me
          </button>
          <button className="m-4 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Know more
          </button>
          <button className="m-4 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="">Resume</a>
          </button>
        </div>
        <div className="flex justify-between mx-auto max-w-[400px] mt-3 sticky top-0">
          <AiFillInstagram size={40}></AiFillInstagram>
          <AiFillLinkedin size={40}></AiFillLinkedin>
          <AiFillTwitterSquare size={40}></AiFillTwitterSquare>
          <AiFillGithub size={40}></AiFillGithub>
          <AiFillFacebook size={40}></AiFillFacebook>
        </div>
      </div>
    </div>
  );
};

export default Hero;
