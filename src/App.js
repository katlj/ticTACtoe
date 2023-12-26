function Square({value}) {
  function handleClick() {
    console.log("clicked!");
  }
  return <button className = "square" onClick={handleClick}>{value} </button>
  //passing data through props, this is a property for passing the parent to child
}
export default function Board() {//parent function
  // our first component- is a piece of reusable code that shows on the screen
 // export makes function accessible outisde of file, default means main function
 // export is what you see on the outside of the page
 //props are used for React components1
 //to go from JSX to react you use curly braces
 //adding the prop to a square component is adding the value = x
  return (
  <>
  
  <div className = "board-row" >
  <Square value = "1"/>
  <Square value = "2"/>
  <Square value = "3"/>
  </div>
  <div className = "board-row">
  <Square value= "4"/>
  <Square value = "5"/>
  <Square value = "6"/>
  </div>
  <div className = "board-row">
  <Square value= "7"/>
  <Square value= "8"/>
  <Square value = "9"/>
  </div>
  </>
  );
}
