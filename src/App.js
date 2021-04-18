import React, {useState}from "react"
import "./App.css"
import {CountdownCircleTimer} from "react-countdown-circle-timer"
import renderTime from "./components/Timer"
// import Breaktime from "./components/Break"

function App() {
  const [addBreak, addTime] = useState(5);

  function increase(){
    addTime(addBreak + 1);
  }
  function decrease(){
    addTime(addBreak - 1);
  }
  const [addWork, addWorkTime]= useState(25)

function increaseWork(){
    addWorkTime(addWork + 1);
  }
  function decreaseWork(){
    addWorkTime(addWork - 1);
  }
  return (
    <div className="App">
      <h1>
        My Pomodoro
      </h1>
      <div className="brake-wrapper">
        <CountdownCircleTimer
          isPlaying={false}
          duration={addBreak}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          size={300}
          onComplete={() => [true, 1000]} >
       <div className="timer">
        <h2>Break</h2>
        <div className="value">{addBreak}</div>
        <div className="text">minutes</div>
        <div>
        <button className="buttons" onClick={decrease}>-</button>
        <button className="buttons" onClick={increase}>+</button>
      </div>
      </div>
        </CountdownCircleTimer>
      </div>
      
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={addWork}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          size={300}
          onComplete={() => [true, 1000]}>
          <div className="timer">
        <h2>Focus</h2>
        <div className="value">{addWork}</div>
        <div className="text">minutes</div>
        <div>
        <button className="buttons" onClick={decreaseWork}>-</button>
        <button className="buttons" onClick={increaseWork}>+</button>
      </div>
      </div>
        </CountdownCircleTimer>
      </div>
      
    </div>
  );
}

export default App;
