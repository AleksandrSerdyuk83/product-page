import React from "react";

export const Label = ({ text, customClass }) => {
  return (
    <section id="label" className={customClass}>
      { text }
    </section>
  );
};
