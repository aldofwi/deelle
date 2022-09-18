import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import isa2 from "../images/isa2.jpg"
import isa4 from "../images/isa4.jpg"
import isa5 from "../images/isa5.jpg"
import isa6 from "../images/isa6.jpg"

function Photos() {

    const properties = {
        duration: 5000,
        transitionDuration: 1500,
        pauseOnHover: true,
        infinite: true,
        arrows: false
    }

    return(
        
        <div>

        <div className="slide-container">

        <Fade {...properties}>
        
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${isa2})`}}>
                    
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${isa4})`}}>
                    
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${isa5})`}}>
                    
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${isa6})`}}>
                
            </div>
        </div>
        </Fade>
        </div>

    </div>

    )
}

export default Photos