import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MainPreview } from "../../MainPreview/MainPreview";
import { Label } from "../../Lable/Label";
import disLike from "../../../assets/images/love.png";
import like from "../../../assets/images/heart.png";
import like2 from "../../../assets/images/like2.png";
import share from "../../../assets/images/share.png";
import { NavigationCard } from "../../NavigationCard/NavigationCard";
import movie from "../../../assets/images/movie.png";
import message from "../../../assets/images/message.png";
import question from "../../../assets/images/question.png";
import open from "../../../assets/images/open.png";
import close from "../../../assets/images/close.png";
import click from "../../../assets/images/click.png";
import bag from "../../../assets/images/bag.png";
import color from "../../../assets/images/color.png";
import image5 from "../../../assets/images/image5.png";
import image6 from "../../../assets/images/image6.png";
import inBasket from "../../../assets/images/inBasket.png";
import { getFirstSymbolToUpper } from "../../../helpers/getFirstSymbolToUpper";
import { ProductPrice } from "../../ProductPrice/ProductPrice";
import { SizesBlock } from "../../SizesBlock/SizesBlock";
import { CustomButton } from "../../CustomButton/CustomButton";

const FILTERS = [
  {name: "#лучшее", classes: 'bg-vinous' },
  {name: "в наличии", classes: 'bg-light-brown' },
  {name: "#хлопок", classes: 'bg-light-black' }
];

export const ProductDescription = ({
  productData
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showTableOfSizes, setShowTableOfSizes] = useState(false);

  function onLikeHandler(e) {
    e.preventDefault();
    setIsLiked(!isLiked);
  }

  function onShowTableOfSizes() {
    setShowTableOfSizes(!showTableOfSizes)
  }

  function onShowDescriptionHandler() {
    setShowDescription(!showDescription);
  }

  return (
    <section id="product-description" className="custom-scroll">
      <MainPreview labelText={`-${productData.salePercent}%`}/>

      {/*START - Filters' block*/}
      <section className="filters-block">
        <section className="filters-block-socials">
          <button
            type="button"
            className="mr-20"
            onClick={(e) => onLikeHandler(e)}
          >
            {
              isLiked
                ? <img className="btn-style" src={like} alt="dislike" />
                : <img className="btn-style" src={disLike} alt="dislike" />
            }
          </button>
          <button>
            <img className="btn-style" src={share} alt="share" />
          </button>
        </section>
        <section className="filters-block-labels fs-12">
          {
            FILTERS.map((filter) => (
              <Label key={filter.name} text={filter.name} customClass={filter.classes}/>
            ))
          }
        </section>
      </section>
      {/*END - Filters' block*/}

      {/*START - Navigation's block*/}
      <section className="navigation-container">
        <NavLink to={`/products/${productData.id}/video-review`} className="nav-link" aria-current="page" >
          <NavigationCard
            title={'Смотреть видеообзоры'}
            count={1}
            icon={movie}
          />
        </NavLink>
        <NavLink to={`/products/${productData.id}/written-review`} className="nav-link" aria-current="page" >
          <NavigationCard
            title={'Отзывы покупателей'}
            count={20}
            icon={message}
          />
        </NavLink>
        <NavLink to={`/products/${productData.id}/questions`} className="nav-link" aria-current="page" >
          <NavigationCard
            title={'Вопросы по модели'}
            count={2}
            icon={question}
          />
        </NavLink>
      </section>
      {/*END - Navigation's block*/}

      {/*START - Description's block*/}
      <section className="product-description-title fs-16">
        <p className="title-name">
          { getFirstSymbolToUpper(productData.fullName) }
        </p>
        <p className="title-category">
          { productData.category }
        </p>
      </section>
      {/*END - Description's block*/}

      {/*START - Block of price & description*/}
      <section className="product-price-block">
        <ProductPrice
          price={productData.price}
          discount={productData.salePercent}
        />
        <section className="product-description-control">
          <p className="fs-14">Подробнее</p>
          <button
            type="button"
            onClick={onShowDescriptionHandler}
          >
            <img src={showDescription ? close : open} alt="open" />
          </button>
        </section>
      </section>
      {
        showDescription && (
          <section className="product-description-opened-block fs-12">
            <p>{ productData.fabricText }</p>
            <p>{ productData.description }</p>
          </section>
        )
      }
      {/*END - Block of price & description*/}

      {/*START - Container of sizes*/}
      <section className="product-size-container">
        {
          !showTableOfSizes
            ? (
              <>
                <section className="product-size-item">
                  <SizesBlock
                    title={'Размеры'}
                    sizes={productData.sizes}
                  />
                </section>
                <section className="product-size-item">
                  <SizesBlock
                    title={'Рост'}
                    sizes={productData.heightSizes}
                  />
                </section>
              </>
            ) : (
              <section className="product-table-of-sizes">
                <p>Таблица размеров</p>
                <p>Здесь должна быть таблица</p>
              </section>
            )
        }
        <button
          type="button"
          className={
            `product-size-open-table fs-14
            ${showTableOfSizes ? 'pos-right' : 'pos-left'}
            `}
          onClick={onShowTableOfSizes}
        >
          {showTableOfSizes ? 'Скрыть таблицу' : 'Таблица размеров'}
        </button>
      </section>
      {/*END - Container of sizes*/}

      {/*START - Block of buttons*/}
      <section className="product-pay-btn">
        <CustomButton
          title={'Купить в один клик'}
          icon={click}
        />
      </section>
      <section className="product-basket-btn">
        <CustomButton
          title={'Купить в один клик'}
          icon={bag}
        />
      </section>
      {/*END - Block of buttons*/}

      {/*START - Block of colors*/}
      {/*TODO: Need to do a separate component*/}
      <section className="product-colors-block">
        <p className="product-color-title fs-20">Цвета:</p>
        <section className="product-colors">
          <div className="product-color-item">
            <img src={color} alt="color-photo" />
          </div>
          <div className="product-color-item active-photo">
            <img src={color} alt="color-photo" />
          </div>
        </section>
      </section>
      {/*END - Block of colors*/}

      {/*START - Other products' block*/}
      {/*TODO: Need to do a separate component - Carousel*/}
      <section className="products-carousel-container">
        <p className="product-carousel-title fs-20">Вы недавно смотрели</p>
        <section className="product-carousel-cards-container">
          {/*TODO: Need to do a separate component - ProductCard*/}
          {/*START*/}
          <div className="product-carousel-card">
            <div className="product-carousel-card-photo">
              <img src={image5} alt="carousel-photo" />
            </div>
            <div className="product-carousel-card-content">
              <div className="product-carousel-card-price fs-16">
                <p>6420</p>
              </div>
              <div className="product-carousel-card-icon">
                <img src={inBasket} alt="in basket" />
              </div>
            </div>
            <p className="product-carousel-card-name fs-16">Название</p>
            <p className="product-carousel-card-category fs-12">Категория</p>
            <div className="product-carousel-card-like">
              <img src={like2} alt="like" />
            </div>
          </div>
          {/*END*/}
          <div className="product-carousel-card">
            <div className="product-carousel-card-photo">
              <img src={image6} alt="carousel-photo" />
            </div>
            <div className="product-carousel-card-content">
              <div className="product-carousel-card-price fs-16">
                <p>6420</p>
              </div>
              <div className="product-carousel-card-icon">
                <img src={inBasket} alt="in basket" />
              </div>
            </div>
            <p className="product-carousel-card-name fs-16">Название</p>
            <p className="product-carousel-card-category fs-12">Категория</p>
            <div className="product-carousel-card-like">
              <img src={like2} alt="like" />
            </div>
          </div>
          <div className="product-carousel-card">
            <div className="product-carousel-card-photo">
              <img src={image5} alt="carousel-photo" />
            </div>
            <div className="product-carousel-card-content">
              <div className="product-carousel-card-price fs-16">
                <p>6420</p>
              </div>
              <div className="product-carousel-card-icon">
                <img src={inBasket} alt="in basket" />
              </div>
            </div>
            <p className="product-carousel-card-name fs-16">Название</p>
            <p className="product-carousel-card-category fs-12">Категория</p>
            <div className="product-carousel-card-like">
              <img src={like2} alt="like" />
            </div>
          </div>
        </section>
      </section>
      {/*END - Other products' block*/}
    </section>
  );
};
