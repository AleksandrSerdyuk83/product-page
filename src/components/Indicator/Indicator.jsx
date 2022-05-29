import React, { useMemo, useRef } from "react";
import indicator from "../../assets/images/indicator.png"
import indicatorActive from "../../assets/images/indicator-active.png"
import { getCountsArr } from "../../helpers/getCountsArr";

export const Indicator = ({ activeIndex, count }) => {
  const counts = useMemo(() => getCountsArr(count), [count]);

  return (
    <section id="indicator">
      {
        counts.map((idx) => (
          <img
            key={idx}
            src={idx === activeIndex ? indicatorActive : indicator}
            alt="indicator"
            className="indicator-item"
          />
        ))
      }
    </section>
  );
};
