import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
}
  from "@/components/ui/dropdown-menu"
import { useState } from 'react';
import { motion, useScroll } from "motion/react"



export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll()
  const location = useLocation();

  const hideBar = location.pathname.startsWith('/project/');
  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-[#0E1115] style-groteks">
      
      {/* header */}
      {!hideBar &&
      <div  className="fixed z-20 flex justify-between w-full items-center p-5 px-5 border-b border-gray-800  bg-transparent backdrop-blur-lg">
        <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    originX: 0,
                    backgroundColor: "#3EE0CF",
                }}
            />
        <h1 className={`text-sm lg:text-xl font-mono font-bold ${open ? 'text-white' : 'text-primary'}`}>
          <span className=''>&gt;_</span>
          <span className=' ml-3'>Muhamad Rifai</span>
        </h1>

        <div className='hidden lg:block'>
          <ul className="flex gap-10 ">
            <li><a href="#home" className='text-paragraf hover:text-[#3EE0CF]'>Home</a></li>
            <li><a href="#about" className='text-paragraf hover:text-[#3EE0CF]'>About</a></li>
            <li><a href="#project" className='text-paragraf hover:text-[#3EE0CF]'>Projects</a></li>
            <li><a href="#contact" className='text-paragraf hover:text-[#3EE0CF]'>Contact</a></li>
          </ul>
        </div>
        <div className='block lg:hidden text-white'>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              {!open ? <Menu /> : <X />}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="h-screen w-screen  items-center justify-center flex flex-col gap-5 bg-transparent font-medium focus:bg-none backdrop-blur-lg border-0 text-[#3EE0CF]" align="start">
              <a href="#home">
                <DropdownMenuItem className='text-2xl'>Home</DropdownMenuItem>
              </a>
              <a href="#about">
                <DropdownMenuItem className='text-2xl'>About</DropdownMenuItem>
              </a>
              <a href="#project">
                <DropdownMenuItem className='text-2xl'>Projects</DropdownMenuItem>
              </a>
              <a href="#contact">
                <DropdownMenuItem className='text-2xl'>Contact</DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      }
      {/* content */}
      <main className=''><Outlet /></main>

      {/* footer */}
      {/* <div className="w-full flex justify-between items-center container mx-auto py-5 text-w">
            <div className="flex items-center gap-2">
                <span className="color-primary">{">_"}</span>
                <p>© 2026 Muhamad Rifa'i. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-2">
                <Github/>
            </div>
      </div> */}
    </div>
  );
}
