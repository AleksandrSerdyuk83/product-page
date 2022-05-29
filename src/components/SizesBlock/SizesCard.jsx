import React from "react";
import availableImage from "../../assets/images/avialble.png";

export const SizesCard = ({
  size,
  available = false,
  activeClass,
  addSizeHandler
}) => {

  function onAddSize() {
    if (!available) addSizeHandler(size)
  }

  return (
    <section id="size-card">
      <section
        className={
          `size-card-item
          fs-16
          ${available && 'available'}
          ${activeClass}
          `
        }
        onClick={onAddSize}
      >
        { size }
      </section>
      {
        available && (
          <section className="size-card-icon">
            <img src={availableImage} alt={'available'} />
          </section>
        )
      }
    </section>
  );
};
