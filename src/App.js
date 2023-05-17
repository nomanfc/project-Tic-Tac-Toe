import { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import { chooseWinner } from "./components/winnerSelect";
import Status from "./components/Status";

function Board() {
  const [isNextX, setIsNextX] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (square[i] || chooseWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    nextSquare[i] = isNextX ? "X" : "O";
    setSquare(nextSquare);
    setIsNextX(!isNextX);
  }

  const winner = chooseWinner(square);

  let status;
  if (winner) {
    status = winner;
  } else {
    status = isNextX ? "X" : "O";
  }

  return (
    <>
      <div className="board-wrapper">
        <Status winner={winner} status={status} />

        <div className="board-row">
          <Square onSquareClick={() => handleClick(0)} value={square[0]} />
          <Square onSquareClick={() => handleClick(1)} value={square[1]} />
          <Square onSquareClick={() => handleClick(2)} value={square[2]} />
        </div>

        <div className="board-row">
          <Square onSquareClick={() => handleClick(3)} value={square[3]} />
          <Square onSquareClick={() => handleClick(4)} value={square[4]} />
          <Square onSquareClick={() => handleClick(5)} value={square[5]} />
        </div>

        <div className="board-row">
          <Square onSquareClick={() => handleClick(6)} value={square[6]} />
          <Square onSquareClick={() => handleClick(7)} value={square[7]} />
          <Square onSquareClick={() => handleClick(8)} value={square[8]} />
        </div>
      </div>
    </>
  );
}

export default Board;
