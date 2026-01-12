'use client'

import React, { useRef, useState } from "react"

interface ComponentProps {
    children: React.ReactNode
}

const ComponentCarousel: React.FC<ComponentProps> = ({ children }) => {

    const [indice, setIndice] = useState(0)

    const carouselItem = React.Children.toArray(children)
    const nextItem = () => {
        setIndice((prevIndice) => (prevIndice + 1) % carouselItem.length)

    }

    const prevItem = () => {
        setIndice((prevIndice) => prevIndice === 0 ? 0 : (prevIndice - 1) % carouselItem.length)
    }

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 ">

            {carouselItem[indice]}
            <div className="w-full flex justify-center ">
                <button className="flex flex-col items-center justify-center p-2">
                    <span className="font-retro w-15 h-15 flex items-center justify-center rounded-full bg-gray-200 border border-gray-300 text-black text-4xl font-bold leading-none pb-2 hover:bg-gray-300 transition-colors shadow-lg shadow-gray-600" onClick={prevItem}>&lt;</span>
                </button>

                <button className="flex flex-col items-center justify-center p-2">
                    <span className="font-retro w-15 h-15 flex items-center justify-center rounded-full bg-gray-200 border border-gray-300  text-black text-4xl font-bold leading-none pb-2 hover:bg-gray-300 transition-colors shadow-lg shadow-gray-600" onClick={nextItem}>&gt;</span>
                </button>
            </div>
        </div>
    )
}

export default ComponentCarousel