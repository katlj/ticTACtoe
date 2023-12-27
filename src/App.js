import {useState} from "react";

function Square() {
  const [value, setValue] = useState(null);// null is the initial value

  function handleClick() {
  // to handle the  value of the state, clicked-> we use X to remember it was clicked
    setValue("X");
  }
  return <button className = "square" onClick={handleClick}>{value} </button>
  //passing data through props, this is a property for passing the parent to child
}
export default function Board() {//parent function
  const [squares, setSquares] = useState(Array(9).fill(null));
  // our first component- is a piece of reusable code that shows on the screen
 // export makes function accessible outisde of file, default means main function
 // export is what you see on the outside of the page
 //props are used for React components1
 //to go from JSX to react you use curly braces
 //adding the prop to a square component is adding the value = x
 //components use states to remember things
  return (
  <>
  
  <div className = "board-row" >
  <Square value = {squares[0]} />
  <Square value = {squares[1]}/>
  <Square value = {squares[2]} />
  </div>
  <div className = "board-row">
  <Square value =  {squares[3]}/>
  <Square value = {squares[4]}/>
  <Square value = {squares[5]}/>
  </div>
  <div className = "board-row">
  <Square value= {squares[6]}/>
  <Square value= {squares[7]}/>
  <Square value = {squares[8]}/>
  </div>
  </>
  );
}
