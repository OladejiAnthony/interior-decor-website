import React from 'react'
import {motion} from "framer-motion"

const Ges = () => {
    //Gestures
    return (
        <motion.div
            initial={{
                backgroundColor: "blue",
                //borderRadius: "50%",
                width: "80px",
                height: "80px",
                margin: "1rem"
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
        />
    )
}

export default Ges

/*
Motion provides "whileHover", "whileTap", "whileDrag" and 
"whileFocus" helper props, that will temporarily animate a 
component to a visual state while a gesture is active.

Like "animate", these can either be set as an object of 
properties (each with their own "transition" prop), or the 
name of a variant.

Motion will also automatically handle the interplay of the 
two gestures, so if a component is being pressed while 
a hover gestures starts/stops, the "whileTap" gesture will 
take priority.

*/