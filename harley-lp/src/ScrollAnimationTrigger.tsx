import React from 'react'
import {motion} from 'framer-motion'


function ScrollAnimationTrigger() {
    return (
      <div
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
          }}>
          <BoxScroll />
          <BoxScroll />
          <BoxScroll />
      </div>
    )
  }

function BoxScroll() {
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

export default ScrollAnimationTrigger
