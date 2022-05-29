import React from "react";

export const CustomButton = ({
 icon = null,
 title,
 callBackHandler = () => {}
}) => {
  return (
    <section
      id="custom-button"
    >
      <button
        className="custom-button-item fs-16"
        onClick={callBackHandler}
        type="button"
      >
        {!!icon && <img src={icon} alt="icon" />}
        <p>{title}</p>
      </button>
    </section>
  );
};
