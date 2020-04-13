import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board'

const styles = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(history)

  const handleClick = (i) => {
    const boardCopy = [...history];
    // if user clicks on occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put and X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setHistory(boardCopy);
    
    setXisNext(!xIsNext)
  }


  const renderMoves = () => {
    return <button onClick={() => setHistory(Array(9).fill(null))}>Start Game</button>
  }

  return (
    <>
      <Board squares={history} onClick={handleClick} />
      <div style={styles}>
        <p>{winner ? 'Winner ' + winner : 'Next Player' + (xIsNext ? ' X' : ' O')}</p>
        {renderMoves()}
      </div>

    </>
  )
}

export default Game;
