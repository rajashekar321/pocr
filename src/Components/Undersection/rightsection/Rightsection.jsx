import React from 'react'
import styled from 'styled-components'
import Dropdown from "./Dropdown"
import Items from './Items'
import "./Rightsection.css"
import PageNumber from './pageNumber/pageNumber'

const Rightsection = () => {
    return (
       <div className="right">
       <Dropdown/>
       <Items/>
       <PageNumber/>
       </div>
    )
}

export default Rightsection

