import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useWinStatus } from "./useWinStatus";

const blockPattern = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const defaultBlockState = ["", "", "", "", "", "", "", "", ""];

const Borad = ({ activeUser, nextUser, togglePlayer }) => {
  const [blockState, setBlockState] = useState(JSON.parse(JSON.stringify(defaultBlockState)));
  const [displayBlockState, setDisplayBlockState] = useState({
    array: JSON.parse(JSON.stringify(defaultBlockState)),
    index: 0,
  });
  const [selectedCell, setSelectedCell] = useState([]);
  const [isGameOver, setGameState] = useState(false);

  const msg = useWinStatus({ gameState: blockState, currentPlayer: nextUser.name, nextUser: activeUser.name });

  useEffect(() => {
    if (!msg.includes('turn')) {
      setGameState(true);
    }
  }, [msg]);

  const restartGame = () => {
    setBlockState(JSON.parse(JSON.stringify(defaultBlockState)));
    setDisplayBlockState({
      array: JSON.parse(JSON.stringify(defaultBlockState)),
      index: 0,
    });
    setSelectedCell([]);
    setGameState(false);
  }

  const prevStep = () => {
    let array = [...displayBlockState.array];
    array[selectedCell[displayBlockState.index - 1]] = "";
    setDisplayBlockState({
      array,
      index: displayBlockState.index - 1
    })
  }

  const nextStep = () => {
    let array = [...displayBlockState.array];
    array[selectedCell[displayBlockState.index]] = blockState[selectedCell[displayBlockState.index]];
    setDisplayBlockState({
      array,
      index: displayBlockState.index + 1
    })
  }

  return (<div>
    <h1 className="text-center text-info my-5">Borad</h1>
    { !isGameOver ? (
      <div className="d-flex align-items-center flex-wrap m-5">
        <Button variant="outline-info" className="m-4" disabled={selectedCell.length < 1} onClick={() => prevStep()}>{"<"}</Button>
        <div>
          {blockPattern.map((b, i) => {
            return <div key={i} className="d-flex">
              {b.map((index, j) => {
                return (
                  <Block
                    key={j}
                    selectedSign={displayBlockState.array[index - 1]}
                    onClickCell={() => {
                      let blockStateClone = [...blockState];
                      let selectedCellClone = [...selectedCell];
                      blockStateClone[index - 1] = activeUser.userSign;
                      setBlockState(blockStateClone);
                      setDisplayBlockState({ array: blockStateClone, index: displayBlockState.index + 1 });
                      selectedCellClone.push(index - 1);
                      setSelectedCell(selectedCellClone);
                      togglePlayer();
                    }}
                  />
                )
              }
              )}
            </div>
          })}
        </div>
        <Button variant="outline-info" className="m-4" disabled={selectedCell.length === 0 || selectedCell.length === displayBlockState.index} onClick={() => nextStep()}>{">"}</Button>
      </div>
    ) : (
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <h4 className="text-center">{msg}</h4>
          <Button variant="info" className="mt-5" onClick={() => restartGame()}>Restart Game</Button>
        </div>
      )}
  </div>)
}

const Block = ({ selectedSign, onClickCell }) => {
  return <div
    style={{ width: '100px', height: '100px', fontSize: '40px' }}
    className="border bg-light d-flex justify-content-center align-items-center"
    onClick={onClickCell}
  >
    <span> {selectedSign}</span>
  </div>
}

export default Borad;