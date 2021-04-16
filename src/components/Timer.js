import React from "react"



const renderTime = ({ remainingTime }) => {

    if (remainingTime === 0) {
      return <div className="timer">Great job Einstain<br/> Time for a break!</div>;

    }else if (remainingTime === 200){
      return <div className= "timer">Start Focus</div>
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">minutes</div>
      </div>
    );
  };

export default renderTime;
