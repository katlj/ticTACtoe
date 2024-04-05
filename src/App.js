import {useState} from "react";

function Square({ value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>// null is the initial value

  );
  }
  function Board({ xIsNext, squares, onPlay }) {//parent function: thre props AKA arguments. becomes fully controlled by props it reieves and updates on player ove
  // to remmeber things components uses states-- useState is a function you call where you store the 
  // const [squares, setSquares] = useState(Array(9).fill(null));//creates an empty w 9 elements--useState says hey this can change

 //const is a keyword to delcare varaibale.. omn this case its a state variable because its value can change
  // our first component- is a piece of reusable code that shows on the screen
 // export makes function accessible outisde of file, default means main function
 // export is what you see on the outside of the page
 //props are used for React components1
 //to go from JSX to react you use curly braces
 //adding the prop to a square component is adding the value = x
 //components use states to remember things
//  const[xIsNext, setXisNext] = useState(true);//each time a player moves, a boolean is flipped to determine whic goes next

 function handleClick(i) {//updates any square
  if (calculateWinner(squares) || squares[i]){//checks if square is already filled OR player has already won, this allows it to be return ealry for the later if statement
    return;//only chnages empty squares
  }
    const nextSquares = squares.slice();//cretaes a copy of the array
    //to mutate is to directly change the idea
    //nextSquares[i]= "X";// is an array that will ass x on click
   //this function tells react the state has change will re-render
 if(xIsNext){//x is always default
  nextSquares[i] = "X";
 }else{
  nextSquares[i] = "O";
 }
 onPlay(nextSquares);//single function that Game componenet updates to Baord on user click
 }//arraow function which is a shorter way to define functions. The code after the arrow runs
 //i is a parameter for the index while the actual number i the argument for the vlaue being changed
const winner = calculateWinner(squares);
let status;
if (winner){
  status = "Winner:" + winner;
}else {
  status = "Next player:" +(xIsNext ? "X": "O");
}
 
 return (
  <>
 
   <div className="status">{status}</div>
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


  //passing data through props, this is a property for passing the parent to child
export default function Game(){
  // const [xIsNext, setXIsNext] = useState(true);//check which player is next
  const [history, setHistory] = useState([Array(9).fill(null)]);//history of moves
  const [currentMove, setCurrentMove] = useState(0);
  //reads the lastsquares forom history
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
    
  function handlePlay(nextSquares){//called by the Board component to update the game
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    ///cretaes a new array that contains all the items stored in history
      

  }
  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    
    }
  
  const moves = history.map((squares, move) =>{//map transforms history(history is an array) of moves into React elements representing buttons on screen displaying a list
     let description;
     if (move > 0 ){
      description = "Go to move #"+ move;
     } else{
      description = "Go to game start";

     }
     return( //list item with buttons containing the past moves
      <li key = {move}>
        <button onClick={()=> jumpTo(move)}>{description}</button>  
      </li>
     );//jump to method is what will chnage the move from the previou
    });// when you render a list , react store infor about each item. When a list is changed or updated, React needs to determine what changes.Key properties allow React to know
  


  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
  }


function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i =0; i <lines.length; i++){
      const[a,b,c] = lines[i];
      if(squares[a] && squares[a]=== squares[b]&& squares[a]=== squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  
  