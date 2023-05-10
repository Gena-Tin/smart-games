import React, { useState } from "react";

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

  const renderElements = () => {
    return elements.map((value, index) => {
      const row = Math.floor(index / 4);
      const col = index % 4;

      const elementStyle = {
        position: "absolute",
        top: `${1 + row * 53}px`,
        left: `${1 + col * 53}px`,
        width: "50px",
        height: "50px",
        border: "1px solid black",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        background: value === 0 ? "transparent" : "rgb(255, 238, 107)",
        borderStyle: value === 0 ? "none" : "solid",
        color: value === 0 ? "transparent" : undefined,
      };

      return (
        <div
          key={index}
          style={elementStyle}
          onClick={() => handleCellClick(index)}
        >
          {value}
        </div>
      );
    });
  };

  const containerStyle = {
    margin: "auto",
    position: "relative",
    width: "213px",
    height: "213px",
    border: "1px solid black",
    borderRadius: "8px",
  };

  const buttonStyle = {
    display: "block",
    margin: "auto",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <>
      <div style={containerStyle}>{renderElements()}</div>
      <button style={buttonStyle} onClick={shuffleElements}>
        Перемешать
      </button>
    </>
  );
}

export default Square;
