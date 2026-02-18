import { project } from "../../config/project";
import { ExternalLink } from 'lucide-react';
import { useNavigate } from "react-router";
import { motion } from 'framer-motion'



export default function Projects() {

  const featuredProject = project.filter(t => t.featured)
  const otherProject = project.filter(t => !t.featured)
  const navigate = useNavigate();
  return (
    <div id="project" className="w-full px-10 lg:px-30 py-10 lg:py-20 bg-black/10">
      {/* project title */}
      <motion.div
      initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }}
      className="flex flex-col gap-4">
        <p className="text-sm text-primary">~/projects</p>
        <h2 className="flex gap-2 items-center">
          <span className="text-2xl lg:text-5xl text-white font-mono font-bold">
            Featured
          </span>
          <span className="text-2xl lg:text-5xl text-primary font-mono font-bold">
            Projects
          </span>
        </h2>
        <p className="text-xs lg:text-sm text-paragraf">
          Beberapa project yang pernah saya kerjakan. Klik untuk melihat detail.
        </p>
      </motion.div>
      {/* content project featured */}
      {featuredProject.map((p) => (
        <div key={p.slug} onClick={() => navigate(`project/${p.slug}`)} className="grid grid-cols-1  lg:grid-cols-2 my-10 border border-white/10 group hover:border-[#3EE0CF] transition-all duration-300 ease-in-out  rounded-xl h-full lg:h-100 cursor-pointer">
          <div className="overflow-hidden rounded-tl-xl rounded-bl-xl">
            <img
              src={p.img}
              alt=""
              className="w-full h-full object-cover scale-100 hover:scale-110 duration-500 transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-5 justify-start lg:justify-center  py-3 lg:py-0 px-2.5 lg:px-5 bg-[#0E1115] rounded-tr-xl rounded-br-xl ">
            <p className="text-primary text-sm">{p.periode}</p>
            <h2 className="text-xl lg:text-2xl text-white font-medium group-hover:text-[#3EE0CF]">
              {p.title}
            </h2>
            <p className="text-xs lg:text-sm text-paragraf overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-3">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2.5 lg:gap-5">
              {p.tech.map((i, key) => (
                <div
                  key={key}
                  className="border border-white/10 px-3 py-1 rounded-lg bg-white/5 w-fit"
                >
                  <p className="text-xs lg:text-sm text-[#707D8F]">{i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* content children */}
      <motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {otherProject.map((t, key) => (
          <div key={key} onClick={() => navigate(`/project/${t.slug}`)} className="flex flex-col rounded-xl overflow-hidden border group border-white/10 hover:border-[#3EE0CF] transition duration-500 ease-in-out cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={t.img}
                alt={t.title}
                className="w-full h-40 lg:h-50 object-center group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-3 p-5 bg-[#0E1115]">
              <div className="flex justify-between w-full">
                <p className="text-primary">{t.periode}</p>
                <ExternalLink className="text-paragraf" size={15} />
              </div>
              <h2 className="text-white font-bold text-md lg:text-xl group-hover:text-[#3EE0CF]">{t.title}</h2>
              <p className="text-paragraf text-xs lg:text-sm overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-3">{t.desc}</p>
              <div className="flex flex-wrap lg:flex-row gap-3">
                {t.tech.map((i, key) => (
                  <p key={key} className="text-paragraf text-xs lg:text-sm">{i}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
