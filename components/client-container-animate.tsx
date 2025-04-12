"use client";
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { animateFromLeft, animateFromAboveSlower, animateFromLeftWithOpacity, animateFromRight, animateOpacity, animateVibrate } from "@/lib/motion";

interface IClientContainer {
  children: React.ReactNode
  className?: string
  direction: "left" | "right" | "above"
}

const ClientContainerAnimate = ({ children, className, direction }: IClientContainer) => {

  const checkDirection = (direction: "left" | "right" | "above") => {
    let directionSettings: any = animateFromLeft;
    switch (direction) {
      case "left":
        directionSettings = animateFromLeft
        break;
      case "right":
        directionSettings = animateFromRight
        break;
      case "above":
        directionSettings = animateFromAboveSlower
        break;
      default:
        directionSettings = animateFromLeft
        break;
    }

    return directionSettings
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true}}
        transition={{staggerChildren:0.5}}
        variants={checkDirection(direction)!}
        className={className}
        
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default ClientContainerAnimate;
