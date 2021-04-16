import React, {useState} from "react"

const BreakTime = () => {

        const [addBreak, addTime] = useState(5);
      
        function increase(){
          addTime(addBreak + 1);
        }
        function decrease(){
          addTime(addBreak - 1);
        }
      
    if (addBreak === 0) {
      return <div className="timer">Ready for a new round!
      <button className="buttons">Start</button>
      </div>;

    }else{return (
      <div className="timer">
        <h2>Break</h2>
        <div className="value">{addBreak}</div>
        <div className="text">minutes</div>
        <div>
        <button className="buttons" onClick={decrease}>-</button>
        <button className="buttons" onClick={increase}>+</button>
      </div>
      </div>
    ); 
  }
  
}
export default BreakTime;