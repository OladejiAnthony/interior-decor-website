import React from 'react'
import { motion } from "framer-motion";


function BT() {
  //Button Tap Animation

  return (
    <div style={{
        backgroundColor: "blue",
        //borderRadius: "50%",
        width: "40rem",
        height: "5rem",
        margin: "1rem",
        padding: "2rem"
    }}>
      <motion.button
        whileTap={{ scale: 0.5 }}
      >
        Click me!
      </motion.button>
    </div>
    
  )
}

export default BT

/*
Button Tap Animation:
This is a really simple yet fun effect to add to your buttons. 
It adds a fun touch to your buttons by scaling them when tapped. 
To add this, we can make use of the "whileTap" property. 
We can scale the button up or down within this property:

*/