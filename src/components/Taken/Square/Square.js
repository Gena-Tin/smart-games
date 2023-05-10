import React, { useState } from "react";
import Cell from "./Cell/Cell";
import css from "./Square.module.css";

function Square({ array }) {
  console.log(array);
  const [elements, setElements] = useState(array);

  const handleCellClick = (index) => {
    const clickedValue = elements[index];

    if (clickedValue !== 0) {
      const row = Math.floor(index / 4);
      const col = index % 4;

      const adjacentIndices = [
        [row - 1, col], // верхняя ячейка
        [row + 1, col], // нижняя ячейка
        [row, col - 1], // левая ячейка
        [row, col + 1], // правая ячейка
      ];

      for (let i = 0; i < adjacentIndices.length; i++) {
        const [adjacentRow, adjacentCol] = adjacentIndices[i];

        if (
          adjacentRow < 4 &&
          adjacentCol >= 0 &&
          adjacentCol < 4 &&
          elements[adjacentRow * 4 + adjacentCol] === 0
        ) {
          const newElements = [...elements];
          newElements[index] = 0;
          newElements[adjacentRow * 4 + adjacentCol] = clickedValue;
          setElements(newElements);
          break;
        }
      }
    }
  };

  const shuffleElements = () => {
    const shuffledElements = [...elements];
    for (let i = shuffledElements.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledElements[i], shuffledElements[j]] = [
        shuffledElements[j],
        shuffledElements[i],
      ];
    }
    setElements(shuffledElements);
  };

  return (
    <>
      <div className={css.containerStyle}>
        <Cell handleCellClick={handleCellClick} elements={elements} />
      </div>

      <button className={css.buttonStyle} onClick={shuffleElements}>
        Mix
      </button>
    </>
  );
}

export default Square;
