import React, { useEffect, useState } from 'react'
import "./Stagger.css"
import { useAnimate, stagger, motion } from "framer-motion";

function Stagger() {
    //Stagger Animation
  const items = ["Item 1", "Item 2", "Item 3", "Item 4",];
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  // the stagger effect
  const staggerList = stagger(
    0.1, 
    { startDelay: 0.25 }
  );

  //Animation runs when the "open" state is on.
  useEffect(() => {
    //ul animation
    animate(
        "ul",
        {
            width: open ? 150 : 0,
            height: open ? 130 : 0,
            opacity: open ? 1 : 0,
            backgroundColor: open ? "yellow" : "none",
            marginLeft: 0,
            paddingLeft: 0,
            padding: "1rem",
        },
        {
            type: "spring",
            bounce: 0,
            duration: 0.4
        }
    );
    //li animation
    animate(
        "li",
        open ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
        {
          duration: 0.2,
          delay: open ? staggerList : 0
        }
      );
  }, [open]) 

  return (
    <div 
      style={{
        backgroundColor: "white",
        //borderRadius: "50%",
        width: "40rem",
        height: "15rem",
        margin: "1rem",
        padding: "2rem",
        color: ""
      }}
      ref={scope}
    >
      <h2>Menu Sidebar</h2>
      <motion.button
        onClick={() => {
            setOpen(!open)
        }}
        whileTap={{ scale: 0.5 }}

      >
        Menu
      </motion.button>
      <ul
   
      >
        {items.map((item, index) => (
          <motion.li key={index} style={{listStyleType: "none"}}>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Stagger

/*
Stagger Animation:
Stagger animations, as demonstrated in dropdowns and navigation menus, involve "animating" elements 
in a SEQUENTIAL manner, each appearing one after the other, with a subtle "delay" distinguishing their appearances. 
You can create much more complex effects using this method.

In this example, we will animate in some menu items when a menu button is clicked. 
We will use the stagger function alongside motion and useAnimate. 
a. Start by creating an array that holds the list of items to be displayed in the menu.
b. To achieve this effect, the list items are initially mapped within a <ul>  and <li> elements.
c. These animations will be triggered by a change in state, which can be toggled using the button.

*/
