import Square from "./Square/Square";

function Taken() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(num.slice());
  return (
    <>
      <h1>TakenGame</h1>
      <Square array={shuffledArray} />
    </>
  );
}

export default Taken;
