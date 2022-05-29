import React from "react";
import arrow from "../../../assets/images/arrow-left.png";
import { NavLink } from "react-router-dom";

export const ProductWrittenReviews = () => {
  return (
    <section id="product-written-reviews">
      <section className="product-written-review-header">
        <NavLink to="/" className="nav-link" aria-current="page" >
          <img src={arrow} alt="back" />
        </NavLink>
        <p className="fs-20">Отзывы</p>
      </section>
    </section>
  );
}
