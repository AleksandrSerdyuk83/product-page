import React from "react";
import arrow from "../../assets/images/arrow.png";

export const NavigationCard = ({ count, title, icon }) => {
  return (
    <section id="navigation-card">
      <section className="navigation-card-menu">
        <section className="menu-description">
          <section className="menu-description-icon">
            <img src={icon} alt="icon" />
          </section>
          <p className="menu-description-count">
            {`+${count}`}
          </p>
        </section>
        <section className="menu-description-nav">
          <img src={arrow} alt="arrow" />
        </section>
      </section>
      <section className="menu-content">
        <p className="fs-14">
          { title }
        </p>
      </section>
    </section>
  );
};
