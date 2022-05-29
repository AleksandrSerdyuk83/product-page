import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProductDescription } from "../components/Product/ProductDescription/ProductDescription";
import { ProductVideoReview } from "../components/Product/ProductVideoReview/ProductVideoReview";
import { ProductWrittenReviews } from "../components/Product/ProductWrittenReviews/ProductWrittenReviews";
import { ProductQuestions } from "../components/Product/ProductQuestions/ProductQuestions";
import { Footer } from "../components/Footer/Footer";
import { productData } from "../helpers/productData";
import { Spinner } from "../components/Spinner/Spinner";
import { getData } from "../helpers/getData";

// const PRODUCT_URL = `
// https://rest.bellavka.by/api/v1/products/57791673?
// include=brand,category,collections,colors,fabrics,heights,kits,season,sizes,photos,videos,styles
// `;

// const REVIEWS_URL = `
// https://rest.bellavka.by/api/v1/feedbacks?type=review&product=57791673&include=answers,characteristics
// `

export const ProductPage = () => {
  const [product, setProduct] = useState({});

  // useEffect(() => {
  //   getData(PRODUCT_URL, 'GET', {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   }).then((res) => {
  //     console.log('result', res)
  //   })
  // }, []);

  useEffect(() => {
    setProduct(productData);
  }, [productData.id]);

  return (
    <section id="product-page">
      {
        product.id
          ? (
            <Routes>
              <Route path="/" exact element={
                <ProductDescription productData={product}/>
              }/>
              <Route path={`/products/${product.id}/video-review`} exact element={<ProductVideoReview/>}/>
              <Route path={`/products/${product.id}/written-review`} exact element={<ProductWrittenReviews/>}/>
              <Route path={`/products/${product.id}/questions`} exact element={<ProductQuestions/>}/>
              <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
          ) : (
            <Spinner/>
          )
      }
      <Footer/>
    </section>
  );
}
