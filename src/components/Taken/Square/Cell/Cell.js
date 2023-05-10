import React from "react";
import css from "./Cell.module.css";

function Cell({ handleCellClick, elements }) {
  return elements.map((value, index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;

    const elementStyle = {
      top: `${1 + row * 53}px`,
      left: `${1 + col * 53}px`,
      background: value === 0 ? "transparent" : "rgb(255, 238, 107)",
      borderStyle: value === 0 ? "none" : "solid",
      color: value === 0 ? "transparent" : undefined,
    };

    return (
      <div
        key={index}
        className={css.elementStyle}
        style={elementStyle}
        onClick={() => handleCellClick(index)}
      >
        {value}
      </div>
    );
  });
}

export default Cell;
