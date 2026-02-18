import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import {motion} from 'framer-motion'

const socialMedia = [
  { icon: Github, link: "https://github.com/MuhamadRifai1311" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/muhmdrfai02" },
  { icon: Mail, link: "mailto:mr209488@gmail.com?subject=Hello&body=Halo Rifai" },
];
export default function Contact() {
  return (
    <div id="contact" className="py-10 lg:py-20 px-10 lg:px-50 w-full">
      <motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }} className="flex flex-col gap-4">
        <p className="text-sm text-primary">~/contact</p>
        <h2 className="flex gap-2 items-center">
          <span className="text-2xl lg:text-5xl text-white font-mono font-bold">
            Get In
          </span>
          <span className="text-2xl lg:text-5xl text-primary font-mono font-bold">
            Touch
          </span>
        </h2>
        <p className="text-paragraf text-sm lg:text-md">
          Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk
          menghubungi saya.
        </p>
      </motion.div>
      {/* content */}
      <motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div className="bg-[#3EE0CF]/10 p-3 rounded-lg">
              <Mail className="text-primary" size={15} />
            </div>
            <p className="text-paragraf">mr209488@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#3EE0CF]/10 p-3 rounded-lg">
              <MapPin className="text-primary" size={15} />
            </div>
            <p className="text-paragraf">Bandung, Indonesia</p>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5 mt-3">
            <p className="text-paragraf font-light">Social</p>
            <div className="flex gap-5">
              {socialMedia.map((item, key) => {
                const Icon = item.icon;
                return (
                  <a
                    key={key}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 text-paragraf  p-2 lg:p-3 hover:border-[#3EE0CF] hover:text-[#3EE0CF] transition duration-500 ease-in-out"
                  >
                    <Icon size={25} />
                  </a>
                );
              })}
            </div>
          </div>
          {/*  */}
        </div>
        <div className="border border-white/10 bg-[#0E1115] p-3 h-fit rounded-2xl">
          <p>
            <span className="text-[#3EE0CF]">const</span>{" "}
            <span className="text-paragraf">developer</span>{" "}
            <span className="text-paragraf">=</span>
            <span className="text-paragraf">{" {"}</span>
          </p>

          <p className="ml-5">
            <span className="text-paragraf">available :</span>{" "}
            <span className="text-[#3EE0CF]">true</span>,
          </p>

          <p className="ml-5">
            <span className="text-paragraf">location :</span>{" "}
            <span className="text-[#3EE0CF]">"Bandung"</span>,
          </p>

          <p className="ml-5">
            <span className="text-paragraf">Job :</span>{" "}
            <span className="text-[#3EE0CF]">"Web Developer"</span>
          </p>
          <p className="text-paragraf">{" }"}</p>
        </div>
      </motion.div>
    </div>
  );
}
