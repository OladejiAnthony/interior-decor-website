import React from 'react'
import { motion } from 'framer-motion'

function KeyF() {
    //KeyFrames
  return (
    <motion.div
        initial={{
          backgroundColor: "blue",
          //borderRadius: "50%",
          width: "80px",
          height: "80px",
          margin: "1rem"
        }}
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
    />
  )
}

export default KeyF

/*
KeyFrames: it sets a value as an array and Motion will animate through 
each of these values in turn.

By default, each keyframe will be spaced evenly throughout the animation, 
but the exact timing and easing can be configured via the "transition" property.

*/

