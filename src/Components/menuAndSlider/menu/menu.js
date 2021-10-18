import { Container } from "react-bootstrap";
import "./menu.css";
import styled from "styled-components";

export default function Menu() {
  const unique = [1, 2, 3, 4, 5, 6];
  let currentActive = 1;
  function clickChangeActive(event) {
    let element = event.target;
    document
      .querySelector(`[name="${currentActive}"]`)
      .classList.remove("activeItem");
    element.classList.add("activeItem");
    currentActive = Number(element.getAttribute("name"));
  }
  return (

      <div className="menu">
        <h4>ALL CATEGORIES</h4>
        <h5
          name={unique[0]}
          onClick={clickChangeActive}
          className="activeItem cat__item"
        >
          Accesories
        </h5>
        <h5 name={unique[1]} onClick={clickChangeActive} className="items">
          Cables & Docks
        </h5>
        <h5 name={unique[2]} onClick={clickChangeActive} className="items">
          Cases & Films
        </h5>
        <h5 name={unique[3]} onClick={clickChangeActive} className="items">
          Charging Devices
        </h5>
        <h5 name={unique[4]} onClick={clickChangeActive} className="items">
          Connected Home
        </h5>
        <h5 name={unique[5]} onClick={clickChangeActive} className="items">
          Headphones
        </h5>
      </div>
     
  );
}
const Containerr=styled.div``;

