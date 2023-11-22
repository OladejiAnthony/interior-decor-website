import React from 'react'
import { motion} from 'framer-motion'


function Dra() {
    //Drag 
  return (
    <motion.div
        initial={{
            backgroundColor: "blue",
            //borderRadius: "50%",
            width: "80px",
            height: "80px",
            margin: "1rem",
            color: "white"
        }}
        drag
        dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
        }}
        //additions
        dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 5

        }}
        draggable="false"

    >
        Drag
    </motion.div>
  )
}

export default Dra

/*
A component can be made draggable with the addition of the drag prop. 
Lock it to either axis by setting drag to "x" or "y".

The component can be CONSTRAINED to a specific range, defined either 
in pixels, or by providing a ref to another DOM element.

These constraints are elastic, and the strength of this elasticity can 
be configured with the "dragElastic" prop.

*/

