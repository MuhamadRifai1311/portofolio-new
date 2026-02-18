import { Code, Sparkles } from "lucide-react";
import Lanyard from "../Lanyard/Lanyard";
import { motion } from 'motion/react'

const tech = [
  "React",
  "Nuxt.js",
  "Vue",
  "Laravel",
  "Tailwind CSS",
  "Shadcn",
  "MySql",
  "TypeScript",
];
export default function Dashboard() {
  return (
    <div id="home" className="lg:h-screen py-20 lg:py-20 px-10 lg:px-30 w-full">
      {/* grid 1 */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center h-screen lg:h-[500px]">
        <motion.div initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }}>
          <div 
            className="flex flex-col gap-3 w-full lg:w-3/4 style-groteks">
            <h2 className="text-3xl lg:text-6xl text-white font-bold ">
              Hi, I'm{" "}
              <span className="text-primary [text-shadow:0_0_7px_#3EE0CF]">
                Muhamad
              </span>
            </h2>
            <h2 className="text-3xl lg:text-6xl text-primary font-bold  [text-shadow:0_0_7px_#3EE0CF]  ">
              Rifa'i
            </h2>
            <p className="text-paragraf text-sm lg:text-lg leading-relaxed">
              Seorang {" "}
              <span className="text-white font-bold">Junior Web Developer</span> yang saat
              ini fokus pada Pengembangan Web. Selain itu, saya juga tertarik
              pada Desain UX/UI dan Pengembangan Aplikasi. Saya suka mempelajari
              hal-hal baru dan selalu terbuka terhadap peluang baru.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 pt-5">
            <a href="#project">
              <button className="px-4 py-3 rounded-xl text-center  flex gap-2 font-mono items-center text-[#0E1115] bg-primary shadow-[0_0_7px_#3EE0CF] cursor-pointer">
                <Code size={15} /> <p className="text-sm lg:text-md">View Projects</p>
              </button>
            </a>
            <a href="#contact">
              <button className="px-4 py-3 rounded-2xl text-center  flex gap-2 font-mono items-center text-white border  hover:bg-white/10 cursor-pointer">
                <Sparkles size={15} /> <p className="text-sm lg:text-md">Get In Touch</p>
              </button>
            </a>
          </div>
          <div className="flex flex-wrap lg:flex-row gap-2 pt-3 lg:pt-5">
            {tech.map((item, index) => (
              <div
                key={index}
                className="group flex  border border-[#707D8F]/20 hover:border-[#3EE0CF] rounded-2xl px-2 py-1 transition-colors duration-300 ease-in-out cursor-default"
              >
                <p className="text-xs lg:text-sm text-[#707D8F] group-hover:text-[#3EE0CF]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* grid 2 */}
        <div className="hidden lg:block">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <motion.div initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              damping: 8,
            }} className="block lg:hidden border  rounded-2xl mx-4 h-55 shadow-[0_0_7px_#3EE0CF] overflow-hidden ">
          <img src="/assets/img.webp" alt="" className="w-full object-cover h-full" />
        </motion.div>
      </div>
    </div>
  );
}
