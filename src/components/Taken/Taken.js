import Square from "./Square/Square";

function Taken() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

  return (
    <>
      <h1>TakenGame</h1>
      <Square array={num} />
    </>
  );
}

export default Taken;
