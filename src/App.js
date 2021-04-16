import React from "react"
import "./App.css"
import {CountdownCircleTimer} from "react-countdown-circle-timer"
import renderTime from "./components/Timer"
import Breaktime from "./components/Break"




function App() {
  return (
    <div className="App">
      <h1>
        My Pomodoro
      </h1>
     
      <div className="brake-wrapper">
        <CountdownCircleTimer
          isPlaying={false}
          duration={2.00}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          size={300}
          onComplete={() => [true, 1000]}
        >
          {Breaktime}
        </CountdownCircleTimer>
      </div>

      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying= {false}
          duration={2.00}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          size={300}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
        
      </div>
    </div>
  );
}

export default App;
