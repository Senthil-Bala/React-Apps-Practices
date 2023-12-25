import React, { useState } from 'react';

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>ShowHide</h1>
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
      {show ? <h1>Welcome to my Website</h1> : null}
    </div>
  );
}

export default ShowHide;

// Description :
// Implement a button to show/hide the text content