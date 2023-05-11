import React, { useEffect, useState } from "react";
import Cell from "./Cell/Cell";
import Overlay from "../Overlay/Overlay";
import Popup from "../Popup/Popup";
import css from "./Square.module.css";

function Square({ array }) {
  const [elements, setElements] = useState(array);

  const [isWin, setIsWin] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const handleCellClick = (index) => {
    setFirstRender(false);
    if (isWin) return;

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
    setIsWin(false);
  };

  const handleOverlayClick = () => {
    setIsWin(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsWin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (
      JSON.stringify(elements) === JSON.stringify(array) &&
      firstRender === false
    ) {
      setIsWin(true);
    }
  }, [elements, array, firstRender]);

  return (
    <>
      <div className={css.containerStyle}>
        <Cell handleCellClick={handleCellClick} elements={elements} />
        <Overlay visible={isWin} onClick={handleOverlayClick} />
        <Popup visible={isWin} onClick={handleOverlayClick} />
      </div>
      <button className={css.buttonStyle} onClick={shuffleElements}>
        Mix
      </button>
    </>
  );
}

export default Square;
