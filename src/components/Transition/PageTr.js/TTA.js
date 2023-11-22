import React from 'react'
import { motion } from "framer-motion";

function TTA() {
    //Text Typing Animation
  const text = "Framer Motion is a really cool tool".split(" "); //converts to array

  return (
    <div style={{
        backgroundColor: "blue",
        //borderRadius: "50%",
        width: "40rem",
        height: "5rem",
        margin: "1rem",
        padding: "2rem",
        color: "white"
    }}>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={i}
          transition={{
            duration: 0.25,
            delay: i / 5
          }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  )
}

export default TTA

/*
Text Typing Animation:
Text typing animations, created with Framer Motion, add a 
playful touch to engage users, useful for loading messages 
and chat simulations. 

To achieve this effect: 
a. we will take a sentence we want to display and convert 
 it into an array of words. 
b. Next, we will map this array out and 
c. add an "animation" and "transition" on the opacity, as well
   as a delay that creates the typing effect.

*/

