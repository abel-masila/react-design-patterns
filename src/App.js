import { SplitSceen } from './SplitSceen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'red' }}> {message}</p>;
};
function App() {
  return (
    <SplitSceen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Side Nav" />
      <RightHandComponent message="Main View" />
    </SplitSceen>
  );
}

export default App;
