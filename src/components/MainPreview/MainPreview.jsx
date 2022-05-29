import React, { useRef, useState } from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";
import search from "../../assets/images/search.png";
import { Label } from "../Lable/Label";
import { Indicator } from "../Indicator/Indicator";

export const MainPreview = ({ labelText }) => {
  const images = useRef([
    image1, image2, image3, image4
  ]);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  function onSlideHandler(value) {
    setActiveImgIdx(value);
  }

  return (
    <div id="main-preview">
      <div className="slider">
        {
          images.current.map((img, idx) => (
            <img key={img} src={img} className={`${activeImgIdx === idx && 'active-img'}`} alt="image"/>
          ))
        }
      </div>
      {
        activeImgIdx > 0 && (
          <img
            className="arrow-left"
            src={arrowLeft}
            alt="arrow"
            onClick={() => onSlideHandler(activeImgIdx - 1)}
          />
        )
      }
      {
        activeImgIdx < images.current.length - 1 && (
          <img
            className="arrow-right"
            src={arrowRight}
            alt="arrow"
            onClick={() => onSlideHandler(activeImgIdx + 1)}
          />
        )
      }
      <img className="search" src={search} alt="search"/>

      <Label text={labelText} customClass={'fs-14 text-styles'}/>

      <section className="indicators-container">
        <Indicator count={images.current.length} activeIndex={activeImgIdx}/>
      </section>
    </div>
  );
};
