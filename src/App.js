import { useState } from 'react';
import './App.css';

function App() {
  const [steps, setSteps] = useState([
    {
      step: 1,
      activated: false
    },
    {
      step: 2,
      activated: false
    },
    {
      step: 3,
      activated: false
    },
    {
      step: 4,
      activated: false
    }
  ]);
  const [currStep, setCurrStep] = useState(null);
  const activateSteps = (ind) => {
    const tempSteps = [...steps];
    for (let i = 0; i < tempSteps.length; i++) {
      if (i <= ind) {
        tempSteps[i].activated = true;
      } else {
        tempSteps[i].activated = false;
      }
    };
    setSteps(tempSteps);
    setCurrStep(ind);
  }

  const progressLine = (100 / (steps.length - 1)) * currStep;
  return (
    <div className="App">
      <div style={{position: 'relative'}}>
        <div className='steps-wrapper'>
          {steps.map((ele, i) => {
            return <div className={`steps ${ele.activated ? 'activated' : null}`} onClick={() => activateSteps(i)} key={i}>{ele.step}</div>
          })}
        </div>
        <div className='steps-line' style={{ width: `${progressLine}%`}}></div>
      </div>
    </div>
  );
}

export default App;
