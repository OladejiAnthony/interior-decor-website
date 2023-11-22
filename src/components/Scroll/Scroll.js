import React from 'react'
import { motion } from "framer-motion";
import "./Scroll.css"

function Card({ text, index }) {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: false }}
    >
      <p className="card-text">{text}</p>
    </motion.div>
  );
}


function Scroll() {
    //Scroll Reveal Animation

    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    return (
      <div className="scroll">
        {items.map((item, i) => (
          <Card key={i} text={item} index={i} />
        ))}
      </div>
    );
}

export default Scroll

/*
Scroll reveal animations are a great way to make websites engaging 
and appealing to users. 
For instance, you can create effects like fading an element in or smoothly sliding 
it into view as it becomes visible on the screen. 
To create this effect, we can use 
1. the whileInView and 
2. viewport props. 
Here's an example of how to use these props to achieve a scroll reveal effect:

We can add animations and effects within the "initial" and "whileInView" props. 
"Variants" can also be used to achieve this same scrolling purpose.

You can set viewport={{ once: true }} to false if you want the effect to occur 
every time the element is scrolled into or out of view.

*/
