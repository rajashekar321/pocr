import React from 'react'
import "./Itemsdataa.css"
const Itemsdataa = () => {
    return (
        <div className="items__section">
            <div className="container" >
              <img className="productImg" src="https://www.apple.com/v/macbook-air/k/images/meta/macbook-air_overview__15sjf4iagj6q_og.png"alt="" />
              <div className="item__name">Apple</div>
              <img  className="rating"src="https://image.shutterstock.com/image-vector/four-golden-star-rating-illustration-260nw-1442679176.jpg" alt="" />
              <div className="price__value">
                <span className="offerPrice">$499</span>
                <span className="realPrice">$$1000</span>
              </div>
            </div>
      </div>
    )
}

export default Itemsdataa;
