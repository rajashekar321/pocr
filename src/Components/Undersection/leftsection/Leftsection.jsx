import React from 'react'
import Brand from './Brand';
import Color from './Color';
import Pricesss from './Pricesss';
import More from './More';
import styled from 'styled-components';
import "./Leftsection.css";
const Leftsection = () => {
    return (
        <div className="left">
           <Pricesss/>
           <Color/>
           <Brand/>
           <More/> 
        </div>
    )
}

export default Leftsection

