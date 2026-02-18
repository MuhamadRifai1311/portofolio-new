import { useParams } from "react-router"
import { project } from "../../config/project"
import { CalendarDaysIcon, MoveLeftIcon, CircleCheck, Github } from "lucide-react"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

export default function Detail() {

    const { slug } = useParams()
    const navigate = useNavigate()
    const [visibleCount, setVisibleCount] = useState(0)
    const projectBySlug = project.find((t) => t.slug === slug)

    useEffect(() => {
        if (!projectBySlug?.children) return

        const interval = setInterval(() => {
            setVisibleCount((prev) =>
                prev === projectBySlug.children.length - 1 ? 0 : prev + 1
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [projectBySlug])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // kalau mau tanpa animasi ganti jadi "auto"
        })
        setVisibleCount(0)
    }, [projectBySlug])


    return (
        <div className="py-30 px-10 lg:px-70 w-full">
            <button onClick={() => navigate('/')} className="text-paragraf text-sm flex gap-3 items-center cursor-pointer"><MoveLeftIcon size={22} />Back to Projects</button>
            <div className="pt-5 lg:pt-10 flex flex-col gap-6">
                <div className="px-2 py-1 w-fit flex gap-1 items-center rounded-2xl bg-[#3EE0CF]/10 text-primary">
                    <CalendarDaysIcon size={12} />
                    <p className="text-[11px]">{projectBySlug?.periode}</p>
                </div>
                <h2 className="text-white text-2xl lg:text-5xl font-bold">{projectBySlug?.title}</h2>
                <div className="flex flex-wrap gap-3">
                    {projectBySlug?.tech.map((t, key) => (
                        <div key={key} className="border border-white/10 px-3 py-1 rounded-lg bg-white/5">
                            <p className="text-paragraf text-xs">{t}</p>
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-55 lg:h-110 overflow-hidden rounded-xl shadow-[0_0_15px_#3EE0CF]">
                    {projectBySlug?.children.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="project"
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-iontaint ${index === visibleCount ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row  gap-4 justify-between">
                    <div className="w-full lg:w-140 flex flex-col gap-3">
                        <h2 className="text-xl lg:text-3xl font-bold text-white">Tentang Project</h2>
                        <p className="text-md text-paragraf text-justify">{projectBySlug?.desc}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full lg:w-50 h-fit p-4 rounded-2xl border border-white/10">
                            <h2 className="text-primary font-medium text-md mb-2">Features</h2>
                            {projectBySlug?.features.map((t) => (
                                <div className="flex gap-2 items-center mb-3">
                                    <CircleCheck size={15} className="text-primary" />
                                    <p className="text-paragraf text-xs">{t}</p>
                                </div>
                            ))}
                        </div>
                        {projectBySlug?.github && (
                            <a
                                href={projectBySlug.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-50 flex gap-3 text-paragraf transition duration-500 ease-in-out items-center rounded-2xl py-3 px-2 border border-white/10 hover:border-[#3EE0CF] hover:text-[#3EE0CF] cursor-pointer"
                            >
                                <Github size={22} />
                                <span>Source Code</span>
                            </a>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}