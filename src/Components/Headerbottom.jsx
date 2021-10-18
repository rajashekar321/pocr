import React from 'react'
import styled from "styled-components";
const Headerbottom = () => {
    return (
        <Container>
            <Nav>
         <a href="www.home.com">Home</a> /
         <a href="www.accessories.com">Accessories</a>
         </Nav>
        </Container>
    )
}
const Container=styled.div`
padding:12px 8px;
max-width:1200px;
margin: auto;
`;
const Nav=styled.nav`
display: flex;
a{
text-decoration: none;
font-weight:800;
color:black;
transition-duration:200s;
:hover{
    background-color:green;
}
}
`;

export default Headerbottom
