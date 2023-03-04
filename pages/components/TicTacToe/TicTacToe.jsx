import React, { useEffect, useState } from "react";
import s from "./TicTacToe.module.scss";
import { GiSpikesInit } from "react-icons/gi";
import { MdExposureZero } from "react-icons/md";


const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cell, setCell] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const nandlerClick = (num) => {
    if (cell[num] !== "") {
      alert("Pдесь занято");
      return;
    }
    let squares = [...cell];
    if (turn === "x") {
      squares[num] = "x";
      setTurn("O");
    } else {
      setTurn("x");
      squares[num] = "o";
    }
    checkForWinner(squares);
    setCell(squares);
  };
  const Cell = ({ num }) => {
    return <td onClick={() => nandlerClick(num)}>{cell[num]}</td>;
  };

  let handlerRestart = () => {
    setWinner();
    setCell(Array(9).fill(""));
  };
  useEffect(() => {
    if (winner !== null) {
      setCell(Array(9).fill(""));
    }
  }, [winner]);
  return (
    <div className={s.contener}>
      <table className={s.table}>
        turn:{turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} выиграл</p>
        </>
      )}
      <button onClick={() => handlerRestart()}>Перезапуск</button>
    </div>
  );
};

export default TicTacToe;
