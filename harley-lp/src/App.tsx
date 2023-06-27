import React from 'react';
import {motion} from 'framer-motion'
import './App.css';
import { MUILayout } from './components/MUILayout';
import ScrollAnimationTrigger from './ScrollAnimationTrigger';


function Box() {
    return(
        <motion.div
            style={{
                margin: "200px 0px",
                width: "100px",
                height: "100px",
                background: "#a2d093"
            }}

            initial= {{opacity:0,scale:0}}
            whileInView = {{opacity:1, scale:1}}
            transition={{duration:0.6}}>
        </motion.div>
    )
}
export default function App() {
return (
  <div className="App">
    <header className="App-header">
      <span className="heading">Harley Collins</span>
    </header>
    <MUILayout />
    <ScrollAnimationTrigger/>
    
  </div>
);
}
