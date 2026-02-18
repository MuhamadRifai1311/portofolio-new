import {motion} from 'framer-motion'
const data = [
  {
    periode: "24 November 2025 - Sekarang",
    perusahaan: "PT Trans Berjaya Khatulistiwa (Tiketux)",
    job: "Web Developer Internship",
    desc: "",
    tech: ["Nuxt.js", "TailwindCss", "Laravel", "Vue", "MySQL", "Shadcn", "Visual Studio Code",],
  },
  {
    periode: "3 November 2023 - 20 Desember 2024",
    perusahaan: "PT Dunia Sandang Pratama",
    job: "Web Developer",
    desc: "Berperan aktif dalam tim untuk mengembangkan website dengan Laravel, merancang antarmuka dengan Figma, serta membangun front-end dan back-end yang terintegrasi, didukung dengan analisis sistem melalui Use Case dan Activity Diagram.",
    tech: [
      "Figma",
      "Laravel",
      "MySQL",
      "Visual Studio Code",
      "TailwindCss",
      "Blade",
    ],
  },
];
export default function Experience() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          damping: 8,
        }}
    className="container w-full px-5 lg:px-30 py-10 lg:py-20">
        {/* experience title */}
      <div className="flex flex-col gap-4">
        <p className="text-sm text-primary">~/Experience</p>
        <h2 className="flex gap-2 items-center">
          <span className="text-2xl lg:text-5xl text-white font-mono font-bold">
            Experience
          </span>
        </h2>
      </div>
      <div className="flex w-full pt-5 pl-5">
        <div className="relative border-l-2 border-[#3EE0CF]/30">
          {data.map((t, index) => (
            <div key={index} className="relative pl-5 lg:pl-10 pb-10">
              {/* Bullet */}
              <div
                className="absolute -left-3 
                        h-6 w-6 rounded-full 
                        bg-[#3EE0CF] 
                        border-4 border-[#0E1115]"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-lg lg:text-xl font-bold">{t.periode}</h2>
                <h3 className="text-white text-md lg:text-lg ">{t.perusahaan}</h3>
                <h4 className="text-white text-sm lg:text-md font-light">{t.job}</h4>
                <p className="text-[#707D8F] text-xs lg:text-sm">{t.desc}</p>
              </div>

              <div className="flex gap-3 flex-wrap mt-3">
                {t.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="border border-white/10 px-3 py-1 rounded-lg bg-white/5"
                  >
                    <p className="text-xs lg:text-sm text-[#707D8F]">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
