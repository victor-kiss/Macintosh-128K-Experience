// Can.tsx (Localizado em '@/app/components/animations/Can')
"use client"

import { MotionStyle, motion } from "framer-motion"
import React from "react"
import Image from 'next/image'

interface CanProps {
  style?: MotionStyle;
}

const Can: React.FC<CanProps> = ({ style }) => (
   <motion.div 
     style={style} 
     // O container pai continua flex para centralizar a imagem gigante
     className="w-full h-auto flex justify-center items-center"
   >
      <Image 
        src={'/macintosh5.png'} 
        width={850} 
        height={850} 
        alt="macintosh front" 
        
     
        className="w-[110vw] max-w-none md:w-auto md:max-w-full h-auto object-contain drop-shadow-xl drop-shadow-black"
        
  
        sizes="(max-width: 767px) 110vw, (max-width: 1200px) 150vw, 850px" 
        
        priority={true} 
        quality={90}
      />
  </motion.div>
);

export default Can