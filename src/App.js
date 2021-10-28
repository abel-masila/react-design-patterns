import { useState } from 'react';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ gotToNext }) => (
  <>
    <h1>Step one</h1>
    <button
      onClick={() =>
        gotToNext({
          name: 'Abel',
        })
      }
    >
      Next
    </button>
  </>
);
const StepTwo = ({ gotToNext }) => (
  <>
    <h1>Step two</h1>
    <button onClick={() => gotToNext({ age: 10 })}>Next</button>
  </>
);
const StepThree = ({ gotToNext }) => (
  <>
    <h1>Step three</h1>
    <p>Congratulations you have a discount</p>
    <button onClick={() => gotToNext({})}>Next</button>
  </>
);
const StepFour = ({ gotToNext }) => (
  <>
    <h1>Step Four</h1>
    <button
      onClick={() =>
        gotToNext({
          hairColor: 'black',
        })
      }
    >
      Next
    </button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
