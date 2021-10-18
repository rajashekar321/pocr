import React from 'react'
import styled from "styled-components"
const Headerr = () => {
    return (
        <>
        <Header>
        
            <Beepicon>
                       <i id="beep-icon"className="fad fa-bags-shopping"></i>
            <Beeptext>beep</Beeptext>
            </Beepicon>
            <Divi>
                <Profileicon>               
                <i className="fas fa-user"></i>
                <Profiletext>
                    <a href="www.google.com">MyProfile</a></Profiletext>
                </Profileicon>
                <Carticon>
                <i className="fas fa-shopping-bag"></i>
                <Carttext>0 items </Carttext>
                <Carttext2>$0.00</Carttext2>

                </Carticon>
                <Searchbar1>
                    <input type="text"></input>
                    <button ><i  className="fas fa-search"></i>
                    </button>
                    </Searchbar1>
                               
            </Divi>
                    </Header>
                    <Searchbar>
                    <input type="text"></input>
                    <button ><i  className="fas fa-search"></i>
                    </button>
                    </Searchbar>
                
        </>
    )
}

export default Headerr
const Searchbar1=styled.div`
{
    display:flex;
border: 1px solid rgb(230, 228, 225);
input{
    border: 0;
    width: 100%;
}
input:focus{
  border: 0;
  outline: none;
}
button{
    
  background-color :white ;
    
    
  border: 0;
 

}
    @media (max-width:400px){
        visibility: visible;
        width:60%;
    }
    @media (max-width:400px){
        display:none;
        width:60%;
    }
}`;

const Searchbar=styled.div`
display:flex;
border: 1px solid rgb(230, 228, 225);
input{
    border: 0;
    width: 100%;
}
input:focus{
  border: 0;
  outline: none;
}
button{
    
  background-color :white ;
    
    
  border: 0;
 

}
@media (min-width:400px){
    display:none;
    position: sticky;
}

`;

const Header=styled.div`
 max-width:1200px;
     margin:auto;
     padding:12px 0 16px;
     display:flex;
     flex-wrap:nowrap;
     position:relative;
     justify-content:space-between;
     background:white;
     width:100%;
  border-bottom:1px solid rgba(0,0,0,0.65) `;

const Beepicon=styled.div`
display:flex;
font-family:'Righteous',cursive;
font-size: x-large;
.menu{
    cursor: pointer;
    position: relative;
    top:-3px;
    left:-2px;
    padding: -1px;
}
   

padding: 0 18px;
`;
const Profileicon=styled.div`
display:flex;
padding: 0 18px;
font-size: small;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    @media (max-width:768px){
        padding: 0 10px;
    }
    

`;
const Carticon=styled.div`
display:flex;
padding: 0 18px;
font-size: small;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    @media (max-width:768px){
        padding: 0 10px;
    }
    @media (max-width:768px){
    font-size:12px;
}
`;
const Searchicon=styled.div`
display:flex;
font-size: small;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
padding: 0 18px;
@media (max-width:500px){
        padding: 0 10px;
    }
    @media (max-width:768px){
    font-size:12px;
}`;
const Beeptext=styled.div`
padding-left:8px;
font-size:x-large;`;
const Profiletext=styled.div`

a{
    text-decoration:none;
    @media (max-width:768px){
    font-size:10px;

}}
`;
const Carttext=styled.div`
cursor: pointer;
@media (max-width:768px){
    font-size:12px;
}`;
const Divi=styled.div`
display:flex;
align-items: center;
@media (max-width:768px){
    font-size:12px;
}`;
const Carttext2=styled.div`
@media (max-width:768px){
    font-size:12px;
}`;
