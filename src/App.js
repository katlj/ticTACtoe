import {useState} from "react";

function Square({ value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>// null is the initial value

  );
  }
  
  //passing data through props, this is a property for passing the parent to child

export default function Board() {//parent function
  const [squares, setSquares] = useState(Array(9).fill(null));
  // our first component- is a piece of reusable code that shows on the screen
 // export makes function accessible outisde of file, default means main function
 // export is what you see on the outside of the page
 //props are used for React components1
 //to go from JSX to react you use curly braces
 //adding the prop to a square component is adding the value = x
 //components use states to remember things
 function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i]= "X";
    setSquares(nextSquares);


 }
  return (
  <>
  
  <div className = "board-row" >
  <Square value = {squares[0]} onSquareClick={ () => handleClick(0)}/>
  <Square value = {squares[1]}onSquareClick={ () => handleClick(1)}/>
  <Square value = {squares[2]} onSquareClick={ () => handleClick(2)}/>
  </div>
  <div className = "board-row">
  <Square value =  {squares[3]} onSquareClick={ () => handleClick(3)}/>
  <Square value = {squares[4]} onSquareClick={ () => handleClick(4)}/>
  <Square value = {squares[5]} onSquareClick={ () => handleClick(5)}/>
  </div>
  <div className = "board-row">
  <Square value= {squares[6]} onSquareClick={ () => handleClick(6)}/>
  <Square value= {squares[7]} onSquareClick={ () => handleClick(7)}/>
  <Square value = {squares[8]} onSquareClick={ () => handleClick(8)}/>
  </div>
  </>
  );
}
