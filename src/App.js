import Ex from "./components/Examples/Anim"
import './App.css';
import Dra from "./components/Examples/Dra";
import Ges from "./components/Examples/Ges";
import KeyF from "./components/Examples/KeyF";
import Mv from "./components/Examples/Mv";
import STA from "./components/Examples/STA";
import BT from "./components/Transition/PageTr.js/BT";
import TTA from "./components/Transition/PageTr.js/TTA";
import Stagger from "./components/Transition/PageTr.js/Stagger";
import Count from "./components/Transition/PageTr.js/Count";
import Scroll from "./components/Scroll/Scroll";

function App() {
  return (
    <div className="App">
      <Ex />
      <KeyF />
      <Ges />
      <Dra />
      <Mv /> 
      <BT />
      <TTA />
      <Stagger />
      <Count />
      <hr />
      <STA />
      <Scroll />
      

      
    </div>
  );
}

export default App;

/*
Framer Motion is a declarative animation library for React. 
It makes adding animations to React apps feel simple, even magical. 
Framer Motion basically hides away CSS transitions from you. 
You just say what you want, and BOOM the library will handle the 
css details of the animation.

The heart & soul of Framer Motion is Motion components. 
You can turn anything HTML or SVG element into a motion component 
by adding motion. to the beginning of the element.

Once an element becomes a motion component, it gets access to a bunch 
of new props like "animate", "variants" and "transition" to name a few.
*/

