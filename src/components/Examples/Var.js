import React, { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
    //Variants
    open: {
       opacity: 1,
       x: 0
    },
    closed: { 
      opacity: 0, 
      x: "-100%" 
    },
  }
  
  export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
        <Items />
      </motion.nav>
    )
  }

/*
Variants are objects that you use to define how you want the animation 
to look and reference the animation by name.

Variants are pre-defined visual states that a component can be in. 
By giving a component and its children variants with matching names, 
the whole React trees can be animated by changing a single prop.

Variants are dope because they free up your motion components from being overcrowded 
with a whole lot of props. You can put all the details of your animation in the 
variants object and reference it by adding the variants prop and to a motion component.

The initial prop describes what state you want the animation to begin.
The animate prop is the final state of the animation. Framer Motion automatically 
takes care of how the animation looks from initial to animate. The animate prop takes objects. 
Temporarily you'll pass in { scale:2 }. This causes Square to scale to twice its size on page loads, 
animate will be changed later.

By using variants, a parent can easily orchestrate the animations of 
its children with special "transition" props like "staggerChildren".

Variants can also be dynamic functions that return different props based 
on data passed to each component's custom prop.

*/