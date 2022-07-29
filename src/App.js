import React, { useState } from "react";


const App = () => {

  let newTime = new Date().toLocaleTimeString();
  let newDate = new Date().toLocaleDateString();

  // useState
  const [ctime, setCtime] = useState(newTime);
  const [cdate, setCdate] = useState(newDate);

  // Click function
  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
    newDate = new Date().toLocaleDateString();
    setCdate(newDate);
  }

  return(
    <>
      <h1>{ctime} <br /> {cdate}</h1>
      <button onClick={UpdateTime} >Get time</button>
    </>
  );
}

export default App;