import React, { useState } from "react";

  const Increment = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    //function for Increment
    setNum(num + 1);
  };

  const decNum = () => {
    //function for decrement
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert('Sorry you can not go bellow "0" ');
    }
  };
  return (
    <div>
      <div className="main_div">
        <h1>{num}</h1>
        <p>Selected Item : {num}</p>
        <button onClick={incNum} className="btn btn-outline-primary m-4">
          Increment
        </button>

        <button onClick={decNum} className="btn btn-outline-success m-5">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Increment;
