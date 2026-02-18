import { GraduationCap, Heart } from "lucide-react";
import { motion } from 'framer-motion'

const tools = [
  {
    title: "Frontend",
    tool: ["React", "TypeScript", "Nuxt.js", "Tailwind CSS", "Shadcn", "JavaScript"],
  },
  {
    title: "Backend",
    tool: ["PHP", "Laravel", "Rest API", 'MySQL'],
  },
  {
    title: "Tools",
    tool: ["Git", "Github", "VS Code", "Figma", "Laragon", "Postman"],
  },
];

const data = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "D3 Manajemen Informatika",
    job: "Politeknik LP3I Bandung",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "Clean Code & Open Mind",
    job: "Open Source countributor",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // jeda antar CARD
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 80 },
  },
}

const tagContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, 
    },
  },
}

const tagItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export default function About() {
  return (
    <div id="about" className="container w-full px-10 lg:px-30 py-10 lg:py-20">
      {/* tittle about us */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }} className="flex flex-col gap-4">
        <p className="text-sm text-primary">~/About</p>
        <h2 className="flex gap-2 items-center">
          <span className="text-2xl lg:text-5xl text-white font-mono font-bold">About</span>
          <span className="text-2xl lg:text-5xl text-primary font-mono font-bold">Me</span>
        </h2>
      </motion.div>
      {/* about description */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }}
        className="flex flex-col lg:flex-row gap-10 pt-10">
        <div className="flex flex-col gap-5 w-full lg:w-[70%]">
          <p className="text-paragraf text-sm lg:text-lg text-justify">
            Saya Muhamad Rifa’i, lulusan{" "}
            <span className="font-bold text-white">Manajemen Informatika</span>{" "}
            di Politeknik LP3I Bandung dengan jenjang{" "}
            <span className="font-bold text-white">Diploma tiga</span>. Saya
            berasal dari Kota Bandung, Jawa Barat, Indonesia. Ketertarikan saya
            pada dunia teknologi, khususnya pengembangan web, desain antarmuka,
            dan aplikasi mobile, mendorong saya untuk terus belajar dan
            mengembangkan kemampuan di bidang ini. Bagi saya, teknologi bukan
            hanya alat, melainkan jembatan untuk menciptakan solusi dan
            pengalaman digital yang bermanfaat.
          </p>
          <p className="text-paragraf text-sm lg:text-lg text-justify">
            Saya percaya bahwa di tengah perkembangan teknologi yang begitu
            cepat, menjadi pembelajar seumur hidup adalah sebuah keharusan.
            Melalui portofolio ini, saya ingin membagikan perjalanan dan karya
            saya dalam dunia teknologi. Saya juga terbuka untuk kolaborasi dan
            pengembangan lebih lanjut bersama para profesional dan komunitas
            yang memiliki visi serupa.
          </p>
        </div>
        {/* about point */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 8,
          }} className="flex flex-col gap-5 w-full lg:w-96 ">
          {data.map((i, key) => {
            const Icon = i.icon;
            return (
              <div
                key={key}
                className="border border-white/10 w-full  p-5 rounded-2xl bg-white/5 flex flex-col gap-2 "
              >
                <div className="flex gap-2 items-center text-[#3EE0CF] font-medium">
                  <Icon size={22} />
                  <div className="flex gap-2 items-center text-sm lg:text-md">{i.job}</div>
                </div>
                <p className="text-[#707D8F] font-mono font-bold text-sm">
                  {i.desc}
                </p>
                <p className="text-[#5C6B7C] font-mono text-xs">{i.job}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      {/* about tools */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="flex flex-col lg:flex-row gap-3 w-full pt-5"
      >
        {tools.map((t, key) => (
          <motion.div
            key={key}
            variants={cardItem}
            className="flex flex-col gap-4 p-4 border border-white/10 rounded-2xl w-full bg-white/5"
          >
            <h2 className="text-primary font-medium text-sm lg:text-md">
        // {t.title}
            </h2>

            <motion.div
              variants={tagContainer}
              className="flex flex-wrap gap-2"
            >
              {t.tool.map((i, index) => (
                <motion.p
                  key={index}
                  variants={tagItem}
                  className="text-white bg-white/10 text-xs lg:text-sm rounded-lg py-1 px-3"
                >
                  {i}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
