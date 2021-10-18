import React from 'react'
import styled from 'styled-components'
const Pricesss = () => {
    return (
        <>
        <Pricess>
          <h3>PRICES</h3>
          <Pricerange>
            <label htmlFor="min__price">Min</label>
            <label htmlFor="max__price">Max</label>
          </Pricerange>
          <Priceinput>
            <input type="number" id="min__price" placeholder="$499" />
            <span>-</span>
            <input type="number" id="max__price" placeholder="$499" />
          </Priceinput>
          </Pricess>
      </>
    )
}

export default Pricesss;
const Pricess=styled.div`
 background-color: whitesmoke;
  padding: 10px 20px;
  margin-bottom: 30px;
`;

const Pricerange=styled.div`
 display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 5px;`;
const Priceinput=styled.div`
display: flex;
  justify-content: space-between;
  align-items:center;
  input{
    width: 30%;
  border: none;
  margin-bottom: 10px;
  }`;
