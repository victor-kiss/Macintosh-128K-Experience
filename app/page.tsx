"use client";


// libs and utils
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion'
import Image from "next/image";


// internal components
import ScrollMarquee from "./components/animations/ScrollMarquee";
import Can from "@/app/components/animations/Can";
import ComponentCarousel from "./components/carousel/component/componentCarousel";

// content
import home_content from "./data/content/home_content";
import macintosh_data, { MacintoshData } from '@/app/data/macintosh/macintosh_data'
import Countdown from "./components/countdown/Countdown";
import { useScrollToTarget } from "./lib/ScrollAnimation";

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
    const canRef = useRef<HTMLDivElement>(null); // animated element
    const targetRef = useRef<HTMLDivElement>(null); // target (end animation)
    const containerRef = useRef<HTMLElement>(null); // animation container

    useScrollToTarget({
        target:targetRef,
        container:containerRef,
        can:canRef
    })

    // set the mac spec title
    const [spec, setSpec] = useState<string>('hardware')

    // set and update the information about spec (hardware or software)
    const [buttonData, setButtonData] = useState({
        hardware: {
            checked: true,
            data: 'hardware'
        },
        software: {
            checked: false,
            data: 'hardware'
        }
    })

    // toggle the specs by click
    const handleSelect = (key: 'hardware' | 'software') => {
        setButtonData((prev) => ({
            hardware: {
                ...prev.hardware,
                checked: key === 'hardware'
            },

            software: {
                ...prev.software,
                checked: key === 'software'
            }
        }))
        setSpec(key)
    }

    return (
        // main container
        <main className="w-full h-auto bg-[#F7F7F7] overflow-x-hidden" ref={containerRef}>
            <div className="grid grid-cols-1 w-full h-auto lg:grid-rows-2">

                {/*Wrapper (animated macintosh and marquee) */}
                <section className="relative col-start-1  w-full ">

                    <div className="sticky top-0 h-screen flex justify-center items-center ">

                        {/*animated element*/}
                        <div ref={canRef}>
                            <Can />
                        </div>

                        {/*Marquee */}
                        <div className="absolute top-0 -z-10">
                            <ScrollMarquee>
                                {Array.from({ length: 3 }).map((_, i) =>
                                    i % 2 == 0 ? (
                                        <span
                                            key={i}
                                            className={`font-retro font-bold bg-clip-text text-transparent  bg-gradient-to-b from-gray-100 to-gray-950 uppercase block text-[15vw]`}

                                        >
                                            Macintosh
                                        </span>
                                    ) : (
                                        <span
                                            key={i}
                                            className={`font-retro font-bold text-transparent bg-clip-text  bg-gradient-to-b from-green-100 to-green-600 uppercase  block text-[15vw]`}

                                        >
                                            Macintosh
                                        </span>
                                    )
                                )}
                            </ScrollMarquee>
                        </div>
                    </div>

                </section>

                {/*section 2 - introduction about the macintosh*/}


                <section className="grid grid-cols-1 w-full h-auto items-center justify-center p-10 gap-8 xl:grid-cols-2  ">
                    <div className="flex items-center justify-center w-full h-auto xl:h-screen">
                        <div className="w-[15em] h-[15em] md:w-[40vw] md:h-[40vw] lg:w-[40vw] xl:w-[30vw] xl:h-[30vw] lg:h-[50vw] bg-gray-100 border border-gray-200 shadow-xl shadow-gray-400 my-5 " ref={targetRef} />

                    </div>

                    <div className="lg:max-w-5xl mx-auto">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1, type: 'tween', ease: 'linear' }}
                            className='font-bold text-4xl  sm:text-6xl mb-6 uppercase wrap-break-word animate-title leading-normal'>
                            {home_content.section1.title}
                        </motion.h1>

                        {
                            home_content.section1.content.map((content, i) => (
                                <motion.p key={i}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.15 * i, ease: 'linear', type: 'tween' }}
                                    className="leading-relaxed my-2 xl:text-lg  text-gray-800">{content}</motion.p>
                            ))
                        }

                    </div>
                </section>

                {/*section 3 - (About the Macintosh) */}

                <section className="w-full h-full  grid grid-cols-1 p-10 gap-4 xl:grid-cols-2 xl:h-screen my-5">
                    <div className="w-full flex items-center justify-center">
                        <motion.div initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1, type: 'tween' }}>

<Image 
    src={'/macintosh4.png'}
    width={800}
    height={800}
    alt="macintosh"
    
    className="w-[110vw] max-w-none md:w-auto h-auto object-contain drop-shadow-xl drop-shadow-black"

    sizes="(max-width: 768px) 150vw, (max-width: 1200px) 60vw, 800px"

    priority={true}
    quality={90} 
/>
                        </motion.div>

                    </div>

                    <div className="w-full h-full xl:flex xl:items-center">
                        <div className="lg:max-w-5xl mx-auto space-y-6 ">

                            <motion.h2 initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.1, type: 'tween' }}
                                className=" text-4xl sm:text-6xl font-bold uppercase wrap-break-word mb-6 leading-normal">{home_content.section2.title}</motion.h2>

                            {
                                home_content.section2.content.map((content, i) => (
                                    <motion.p key={i}
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.1 * i, ease: 'linear', type: 'tween' }}
                                        className="leading-relaxed my-2 xl:text-lg">{content}</motion.p>
                                ))
                            }

                        </div>
                    </div>
                </section>

                {/*section 4 - SPECS (Hardware/software) */}

                <section className=" relative w-full h-auto  p-10  xl:grid-cols-2 xl:h-screen my-5  sm:p-0 z-10">
                    {/* 1. Grid Cyberpunk  */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#101010_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>

                    <div className="flex flex-col items-center gap-6">
                        <motion.h2 initial={{ x: -500, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, type: 'tween' }} className=" text-4xl sm:text-6xl font-bold uppercase wrap-break-word text-center leading-normal">{spec}</motion.h2>

                        {/*buttons for spec (hardware/ software) */}
                        <div className="flex flex-wrap gap-2">
                            <motion.button initial={{ opacity: 0, scale: 0.2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25, type: 'tween' }} type="button" value={'hardware'} className={`font-retro ${buttonData.hardware.checked == true ? 'bg-[#202020] text-gray-100' : 'bg-transparent'} py-1 px-3 border border-gray-600 shadow-lg rounded-lg transition-all duration-300 ease-in-out`} onClick={() => handleSelect('hardware')}>Hardware</motion.button>

                            <motion.button initial={{ opacity: 0, scale: 0.2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25, type: 'tween' }} type="button" value={'software'} className={`font-retro ${buttonData.software.checked == true ? 'bg-[#202020] text-gray-100' : 'bg-transparent'} py-1 px-3 border border-gray-600 shadow-lg rounded-lg transition-all duration-300 ease-in-out`} onClick={() => handleSelect('software')}>Software</motion.button>
                        </div>

                        {/*Carousel */}
                        <ComponentCarousel>
                            {
                                macintosh_data[spec as keyof MacintoshData].map((hardware, indice) => (

                                    //external part

                                    <div className="bg-[#E6E1D3]  p-12 rounded-lg flex flex-col gap-6 border-r-8 border-b-8 border-r-[#beb18e] border-b-[#beb18e]  border-l-2 border-t-2 border-t-gray-100 border-l-gray-100 shadow-xl shadow-gray-600 " key={indice}>

                                        {/*black border (around the monitor) */}
                                        <div className="bg-[#202020] p-6 rounded-lg">

                                            {/*Monitor and monitor's data */}

                                            <div className="min-w-70 min-h-60 lg:min-h-60 xl:min-h-70 p-4 border bg-white border-neutral-800 rounded-lg flex flex-col items-baseline justify-center gap-4 sm:min-w-80">

                                                {/*spec label */}
                                                <motion.span initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -30 }}
                                                    transition={{ type: "keyframes", stiffness: 300, damping: 30 }} className="font-retro font-bold text-xl wrap-break-word text-gray-800">{hardware.label}</motion.span>

                                                {/*spec data */}
                                                <motion.p initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -50 }}
                                                    transition={{ type: "keyframes", stiffness: 300, damping: 30, delay: 0.1 }} className="text-gray-700  wrap-break-word">{hardware.spec}</motion.p>
                                            </div>
                                        </div>

                                        {/*floppy disk */}
                                        <div className="flex w-full  justify-end align-baseline">
                                            <div className="w-20 h-1 bg-[#202020] mt-0.5" />
                                            <div className="w-10 h-2 bg-[#202020] " />
                                        </div>
                                    </div>

                                ))
                            }
                        </ComponentCarousel>
                    </div>
                </section>

                {/*section 5 - Countdown */}

                <section className="relative w-full h-full bg-black/95 flex flex-col items-center justify-center overflow-hidden selection:bg-green-500 selection:text-black">


                    {/* 1. Grid Cyberpunk  */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    </div>


                    {/* content */}

                    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 p-4  sm:p-0 ">

                        {/* Badge "System Status" */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-900/50 bg-green-900/10 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-green-400 uppercase tracking-widest">System Online</span>
                        </motion.div>

                        {/* Título Principal */}
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="text-center "
                        >
                            <span className="block text-green-500 text-4xl sm:text-6xl md:text-7xl font-bold uppercase font-retro tracking-tight drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] leading-normal">
                                A revolução
                            </span>
                            <span className="block text-transparent bg-clip-text bg-linear-to-b from-green-300 to-green-700 text-3xl sm:text-5xl md:text-6xl font-bold uppercase font-retro mt-2 leading-normal">
                                Começa em:
                            </span>
                        </motion.h2>


                        {/* Componente Countdown */}
                        <div className="w-full transform hover:scale-105 transition-transform duration-500 ">
                            <Countdown />
                        </div>

                    </div>
                </section>

                {/*section 6 - Form */}

                 <div className=" relative w-full h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-green-500 ">

                    
                    {/* Grid Cyberpunk  */}
                      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    </div>

                            {/*form */}
                             <form className=" bg-[#202020] min-h-80 w-90 sm:min-w-2xl z-10 border border-gray-600 flex flex-col gap-4 shadow-lg shadow-gray-500 ">
                            
                            <div className="w-full bg-[#333333] flex  gap-2 p-2 border-b border-gray-100/30">
                                
                                     <div className="flex flex-1 w-full justify-center">
                                         <h3 className="text-lg sm:text-xl  font-bold uppercase text-gray-200 text-center">NÃO_PERCA_O_BOOT </h3>
                                     </div>
                              

                                <div className="pr-2">
                                    <span className="font-retro text-gray-400 text-lg hover:cursor-pointer">&#120;</span>
                                </div>
                            </div>
                             
                             <div className="flex flex-col justify-center gap-4 p-6 w-full h-full">
                            <div className="flex items-baseline px-2  gap-2 max-w-lg">
                                <span className="font-retro text-gray-300">&gt;</span>
                                <span className="font-retro text-gray-300 wrap-break-word border-2 border-gray-300 p-1">Insira seu e-mail abaixo para ser notificado do lancamento do Macintosh 128K!</span>
                            </div>

                            <div className="flex items-baseline px-2 gap-2">
                                    <span className="font-retro text-green-300">&gt;</span>

                                    <label htmlFor="email_input" className="sr-only">E-mail</label>
                                      <input type="email" required={true} min={10} max={60} placeholder="ex: jhondoe@gmail.com" autoComplete="true" className=" text-green-300 placeholder:text-green-300 py-2.5 pr-4  min-w-60 text-left font-retro focus:outline-none focus:text-green-400 focus:placeholder:text-green-400 transition-colors duration-200 ease-linear hover:text-green-400 hover:placeholder:text-green-400  autofill:shadow-[inset_0_0_0px_1000px_#202020] autofill:[-webkit-text-fill-color:var(--color-green-400)]" id="email_input"/>
                                </div>

                            <div className="flex items-baseline px-2 gap-2">
                                    <span className="font-retro text-gray-100">&gt;</span>
                                  <button value={'submit'} type="submit" className=" pr-1  font-retro text-gray-100 hover:cursor-pointer hover:scale-105">&#91;Enviar&#93;</button>
                            </div>
                            </div>
                        </form>
                    </div>
            </div>

        </main>
    );
}
