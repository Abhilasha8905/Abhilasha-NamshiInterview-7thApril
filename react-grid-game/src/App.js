import React from 'react';
import './App.css';

/**
 * 
 *  clickCounter: Array to store click number for each box
 *  redBox: Array to store current two red boxes
 */

function App({ row = 4, col = 4, NO_OF_RED_BOX = 2 }) {
  const [{ clickCounter = [], redBox = [] }, setData] = React.useState({});

  const handleBoxOnClick = (e) => {
    let id = Number(e.target.id);
    id += 1;
    if (clickCounter.indexOf(id) > -1) {
      alert('Box already clicked');
      return;
    }
    const copyRedBox = [...redBox];
    copyRedBox.push(id);
    if (copyRedBox.length > NO_OF_RED_BOX) {
      copyRedBox.shift();
    }
    setData({ clickCounter: [...clickCounter, id], redBox: copyRedBox })
  }

  const getColor = (id) => {
    if (redBox.includes(id)) { return 'red' };
    return 'blue';
  }
  const getText = (id) => {
    const clickedNo = clickCounter.indexOf(id);
    if (clickedNo > -1) { return `Box ${clickedNo + 1}` };
    return '';
  }

  const generateGrid = () => {
    return new Array(row * col).fill(0).map(
      (k, i) =>
        <div
          className='game-cell'
          id={i}
          style={{ background: getColor(i + 1) }}
          onClick={handleBoxOnClick}
        >
          {getText(i + 1)}
        </div>);
  }

  return (
    <div>
      <h1>Simple 4 x 4 Grid Game</h1>
      <div className='container'>
        <div className="game-container">
          <div className="game">
            {generateGrid()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
