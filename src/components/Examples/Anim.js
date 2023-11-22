import React from 'react'
import { motion } from "framer-motion"


function Ex() {
  //Animation 
  return (
    <motion.div
        style={{
          backgroundColor: "blue",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          margin: "1rem"
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 0.5 }}
    />
  )
}

export default Ex


/* 
The "animate" prop can accept an object of values. 
When one of the values changes, the motion component 
will automatically animate to the new state.

The animation used can be configured using 
the "transition" prop.

Your motion components need to know when you want these animations 
to start and what state you want them to end up in when the 
animation is finished.
For this, you need to add the "intial" prop and the "animate" prop.


*/

