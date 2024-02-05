import React from 'react';

function App() {
  const [message, setMessage] = React.useState('Where are you?');

  function handleClick() {
    setMessage("And I'm so sorry");
  }

  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </>
  );
}

export default App;
