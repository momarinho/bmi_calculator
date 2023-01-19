import React, { useState, useMemo } from 'react';

import './App.css';

const DefaultValues = {
  weightVal: 50,
  heightVal: 140,
};

function App() {
  const [weight, setWeight] = useState(DefaultValues.weightVal);
  const [height, setHeight] = useState(DefaultValues.heightVal);

  const onWeightChange = (e) => {
    const inputWeight = e.target.value;
    setWeight(inputWeight);
  };

  const onHeightChange = (e) => {
    const inputHeight = e.target.value;
    setHeight(inputHeight);
  };

  const output = useMemo(() => {
    const calcHeight = height / 100;

    return (weight / (calcHeight * calcHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input">
        <p className="info">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="number"
          step="1"
          min="30"
          max="220"
        />

        <p className="info">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="number"
          min="140"
          max="220"
        />
      </div>

      <div>
        <p>Your BMI is: </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
