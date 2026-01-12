"use client";

import {motion} from 'framer-motion'

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
}


const ScrollMarquee: React.FC<MarqueeProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`relative h-screen overflow-hidden ${className} z-0`}
    >
      <div
        className="flex flex-col items-center h-full marquee-container whitespace-nowrap "
      >
   
        {
          Array.from({length:5}).map((_,indice) =>(
            <motion.div key={indice} 
            initial={{y:0}}
            animate={{y:'-75%'}}
            transition={{duration:10,ease:'linear',repeat:Infinity,type:'tween',repeatType:'mirror'}}
            >
              {children}
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default ScrollMarquee;