import React from "react";
import { getDiscountPrice } from "../../helpers/getDiscountPrice";

export const ProductPrice = ({ price, discount }) => {
  return (
    <section id="product-price">
      <section className="product-description-price fs-16">
        <p className="price-nominal fs-24">
          { price }
        </p>
        <p className="price-discount fs-14">
          {getDiscountPrice(price, discount)}
        </p>
      </section>
    </section>
  )
}