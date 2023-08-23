import {
  FaAngular,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaGit,
} from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import {
  SiAgora,
  SiApache,
  SiApachegroovy,
  SiDacia,
  SiDart,
  SiFlutter,
  SiJenkins,
  SiLinux,
  SiMysql,
  SiPostman,
  SiRazorpay,
  SiApachekafka,
  SiPandas,
} from "react-icons/si";
import {
  BiLogoSpringBoot,
  BiLogoCPlusPlus,
  BiLogoAws,
  BiLogoMongodb,
  BiLogoDocker,
  BiLogoKubernetes,
  BiLogoPostgresql,
  BiLogoFlask,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoTypescript,
  BiSolidFileJson,
  BiLogoRedux,
  BiLogoJavascript,
  BiLogoJquery,
} from "react-icons/bi";
import { DiFirebase } from "react-icons/di";
import SkillChart from "./SkillChart";
import SkillCard from "./SkillCard";
import { AiFillAndroid } from "react-icons/ai";

const Skill = () => {
  const SkillsArray = [
    {
      logo: <FaAngular size={50}></FaAngular>,
      name: "Angular.TS",
      completed: 90,
    },
    {
      logo: <FaPython size={50}></FaPython>,
      name: "Python",
      completed: 75,
    },
    {
      logo: <FaNodeJs size={50}></FaNodeJs>,
      name: "Node.JS",
      completed: 95,
    },
    {
      logo: <FaJava size={50}></FaJava>,
      name: "Java",
      completed: 90,
    },
    {
      logo: <SiFlutter size={50}></SiFlutter>,
      name: "Flutter",
      completed: 50,
    },
    {
      logo: <BiLogoJavascript size={50}></BiLogoJavascript>,
      name: "javaScript",
      completed: 50,
    },
    {
      logo: <FaReact size={50}></FaReact>,
      name: "React",
      completed: 90,
    },
    {
      logo: <BiLogoSpringBoot size={50}></BiLogoSpringBoot>,
      name: "SpringBoot",
      completed: 90,
    },
    {
      logo: <FaHtml5 size={50}></FaHtml5>,
      name: "Html5",
    },
    {
      logo: <AiFillAndroid size={50}></AiFillAndroid>,
      name: "Android App Development",
    },
    {
      logo: <BiLogoCPlusPlus size={50}></BiLogoCPlusPlus>,
      name: "C++",
    },
    {
      logo: <BiLogoAws size={50}></BiLogoAws>,
      name: "AWS",
    },
    {
      logo: <BiLogoMongodb size={50}></BiLogoMongodb>,
      name: "MongoDB",
    },
    {
      logo: <BiLogoDocker size={50}></BiLogoDocker>,
      name: "Docker",
    },
    {
      logo: <BiLogoKubernetes size={50}></BiLogoKubernetes>,
      name: "Kubernates",
    },
    {
      logo: <BiLogoPostgresql size={50}></BiLogoPostgresql>,
      name: "PostgresSQL",
    },
    {
      logo: <SiRazorpay size={50}></SiRazorpay>,
      name: "Integrating Payment Gateway",
    },
    {
      logo: <BiLogoFlask size={50}></BiLogoFlask>,
      name: "Flask",
    },
    {
      logo: <SiMysql size={50}></SiMysql>,
      name: "MySQL",
    },
    {
      logo: <BiLogoTailwindCss size={50}></BiLogoTailwindCss>,
      name: "Tailwind CSS",
    },
    {
      logo: <BiLogoBootstrap size={50}></BiLogoBootstrap>,
      name: "BootStrap",
    },
    {
      logo: <BiLogoTypescript size={50}></BiLogoTypescript>,
      name: "TypeScript",
    },
    {
      logo: <SiDart size={50}></SiDart>,
      name: "Dart",
    },
    {
      logo: <BiSolidFileJson size={50}></BiSolidFileJson>,
      name: "JSON and JWT",
    },
    {
      logo: <BiLogoRedux size={50}></BiLogoRedux>,
      name: "Redux",
    },
    {
      logo: <SiJenkins size={50}></SiJenkins>,
      name: "Jenkins",
    },
    {
      logo: <DiFirebase size={50}></DiFirebase>,
      name: "FireBase",
    },
    {
      logo: <FaGit size={50}></FaGit>,
      name: "Git",
    },
    {
      logo: <SiPostman size={50}></SiPostman>,
      name: "Postman",
    },
    {
      logo: <SiLinux size={50}></SiLinux>,
      name: "Linux",
    },
    {
      logo: <BiLogoJquery size={50}></BiLogoJquery>,
      name: "JQuery",
    },
    {
      logo: <SiApachekafka size={50}></SiApachekafka>,
      name: "Apache Kafka",
    },
    {
      logo: <SiApachegroovy size={50}></SiApachegroovy>,
      name: "groovy",
    },
    {
      logo: <SiPandas size={50}></SiPandas>,
      name: "Pandas",
    },
    {
      logo: <SiPandas size={50}></SiPandas>,
      name: "Pandas",
    },
  ];

  return (
    <div id="skill" className="text-black bg-slate-200 mt-20">
      <div className="flex items-center">
        <h3 className="text-4xl pt-6 pl-5">My Skills</h3>
        <hr className="flex-grow border-gray-700 ml-4 mt-14 mr-5" />
      </div>
      <p className="pt-5 ml-5 font-mono">Some of My Skills</p>
      <div className="grid grid-cols-6 gap-5 md:grid-cols-6  sm:grid-cols-3">
        {SkillsArray.map((indSkill, index) => (
          <ProgressBar key={index} skill={indSkill} />
        ))}
        {/* <SkillCard></SkillCard> */}
      </div>
    </div>
  );
};
export default Skill;
