import "./slider.css";
import { useState, useEffect } from "react";
export default function Slider() {
  let url = "#";
  let [current, setCurrent] = useState(0);
  useEffect(() => {
    const slider3 = document.querySelector(".slider3");
    slider3.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  useEffect(() => {
    const id = setInterval(function () {
      setCurrent(function (oldState) {
        return (oldState + 1) % 3;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slider2">
          <div className="slider3">
            <div className="img__box">
              <img src="https://assets.mspimages.in/wp-content/uploads/2021/09/iPhone-13-design.jpg" alt="" />
              <div className="img__content">
                <h1>Iphone 13 mini pro</h1>
                <p>nice experience</p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className="img__box">
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/note-8-main-559_082317093632.jpg?NVdUbu5hHKoAggxbttDNvHFs1UNfmaPB&size=770:433" alt="" />
              <div className="img__content">
                <h1>Samsung Edge 8</h1>
                <p>we give the experience</p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className="img__box">
              <img src="https://assets.mspimages.in/wp-content/uploads/2020/09/OPPO-F17-Pro-3.jpg" alt="" />
              <div className="img__content">
                <h1>OPPO f17</h1>
                <p>Hardest Thing in the world</p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider__navBtn navBtn1"
          onClick={function () {
            setCurrent(0);
          }}
        ></div>
        <div
          className="slider__navBtn navBtn2"
          onClick={function () {
            setCurrent(1);
          }}
        ></div>
        <div
          className="slider__navBtn navBtn3"
          onClick={function () {
            setCurrent(2);
          }}
        ></div>
      </div>
    </>
  );
}
