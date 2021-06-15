import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const color = buttonColor === 'red'? 'blue' : 'red';

  return (
    <div className="App">
      <button
        style = {{backgroundColor: buttonColor}}
        onClick = {() => setButtonColor(color)}
      > 
      Change to {color} 
      </button>
    </div>
  );
}

export default App;
