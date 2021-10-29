import { RecursiveComponent } from './RecursiveComponent';
import { BigSuccessButton } from './composition';
import { DangerButton } from './partiallyApply';
const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <>
      <h1>Here</h1>
      <RecursiveComponent data={nestedObject} />
      <DangerButton text="Delete" />
      <BigSuccessButton text="Save" />
    </>
  );
}

export default App;
