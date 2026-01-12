"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate?: string;
}

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function Countdown({ targetDate = "2027-01-01T00:00:00" }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculateTimeLeft = useCallback(() => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = Math.abs(target - now);

    const format = (num: number) => String(Math.floor(num)).padStart(2, "0");

    if (difference > 0) {
      return {
        days: format(difference / (1000 * 60 * 60 * 24)),
        hours: format((difference / (1000 * 60 * 60)) % 24),
        minutes: format((difference / 1000 / 60) % 60),
        seconds: format((difference / 1000) % 60),
      };
    }

    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) return null; 

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 },
      }}
      className="w-full max-w-[90vw] mx-auto h-full" 
    >
    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-5 h-full w-full">
        {timeUnits.map((unit, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 120 }}
            key={index}
            className="flex flex-col items-center justify-center p-3 sm:p-6 bg-[#141414] border border-green-800 rounded-xl shadow-sm shadow-green-300 hover:shadow-lg transition-shadow duration-300 aspect-square w-full"
          >
            <motion.span
              key={unit.value}
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
      
              className="font-retro text-3xl sm:text-5xl font-bold text-gray-100 mb-1 sm:mb-2 tabular-nums"
            >
              {unit.value}
            </motion.span>
            
            <span className="text-[10px] sm:text-sm text-gray-200 font-bold uppercase tracking-wider font-retro">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}