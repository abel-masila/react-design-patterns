import { UncontrolledOnboardinfFlow } from './UncontrolledOnboardinfFlow';

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
    <button onClick={() => gotToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ gotToNext }) => (
  <>
    <h1>Step three</h1>
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
  return (
    <>
      <UncontrolledOnboardinfFlow
        onFinish={(data) => {
          console.log(data);
          alert('The End');
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardinfFlow>
    </>
  );
}

export default App;
