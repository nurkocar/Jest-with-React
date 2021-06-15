import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const color = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(color)}
        disabled={disabled}
      >
        Change to {color}
      </button>
      
      <input
        type='checkbox'
        id = 'disable-button-checkbox'
        defaultChecked = {disabled}
        aria-checked = {disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor = 'disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
