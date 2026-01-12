// Can.tsx (Localizado em '@/app/components/animations/Can')
"use client"

import { MotionStyle, motion } from "framer-motion"
import React from "react"
import Image from 'next/image'
interface CanProps {
  style?: MotionStyle;
}

const Can: React.FC<CanProps> = ({ style }) => (
   <motion.div style={style} className="w-full h-auto flex justify-center items-center align-center">
      <Image src={'/macintosh5.png'} width={800} height={800} alt="macintosh front" className="w-auto h-auto object-contain drop-shadow-xl drop-shadow-black" sizes="(max-width: 767px) 140vw, (max-width: 1200px) 250vw, 900px" priority={true} quality={90}/>
  </motion.div>
);

export default Can