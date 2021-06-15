import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const color = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(color)}
        disabled={disabled}
      >
        Change to {color}
      </button>

      <input
        type='checkbox'
        id = 'enable-button-checkbox'
        defaultChecked = {disabled}
        aria-checked = {disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
