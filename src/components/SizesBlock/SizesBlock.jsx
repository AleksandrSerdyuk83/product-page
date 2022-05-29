import React, { useCallback, useState } from "react";
import { getTypeOfSize } from "../../helpers/getTypeOfSize";
import { SizesCard } from "./SizesCard";

export const SizesBlock = ({ sizes, title }) => {
  const [currentSizes, setCurrentSizes] = useState([]);

  const addSizeHandler = useCallback((size) => {
    if (currentSizes.includes(size)) {
      setCurrentSizes(currentSizes.filter(currSize => size !== currSize));
    } else setCurrentSizes([...currentSizes, size]);
  }, [currentSizes.length]);

  return (
    <section id="sizes-block">
      <p className="fs-20">{`${title}:`}</p>
      <section className="size-card-items">
        {
          getTypeOfSize(title).map((size) => (
            <SizesCard
              key={size}
              size={size}
              available={!sizes.includes(size)}
              addSizeHandler={addSizeHandler}
              activeClass={currentSizes.includes(size) ? 'active' : ''}
            />
          ))
        }
      </section>
    </section>
  );
};
