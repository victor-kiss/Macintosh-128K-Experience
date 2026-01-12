'use client'
import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra fora do hook para evitar re-registro desnecessário
gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationProps {
    can: RefObject<HTMLDivElement | null>; // Tipagem mais segura para Next.js
    target: RefObject<HTMLDivElement | null>;
    container?: RefObject<HTMLElement | null>; // Opcional
}

export const useScrollToTarget = ({ can, target, container }: UseScrollAnimationProps) => {

    useLayoutEffect(() => {
        // 1. Guard Clauses: Se não houver elementos, não faz nada.
        if (!can.current || !target.current) return;

        // Elementos cacheados para uso no closure
        const canEl = can.current;
        const targetEl = target.current;
        const scope = container?.current || document.body

        const calculateTargetOffset = () => {
            if (!targetEl) return { x: 0, y: 0 };

            const rect = targetEl.getBoundingClientRect();

            const targetCenterX = rect.left + rect.width / 2;
            const targetCenterY = rect.top + rect.height / 2;

            const viewportCenterX = window.innerWidth / 2;
            const viewportCenterY = window.innerHeight / 2;

            return {
                x: Math.floor(targetCenterX - viewportCenterX),
                y: Math.floor(targetCenterY - viewportCenterY),
            };
        };

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
        }, () => {
            gsap.to(canEl, {
        
                x: () => calculateTargetOffset().x,
                y: () => calculateTargetOffset().y,
                ease: "none",
                scrollTrigger: {
                    trigger: targetEl,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true, 
                },
            });

        }, scope);

        return () => mm.revert();
        

    }, [can, target, container]);
};