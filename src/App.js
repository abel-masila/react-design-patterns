import { useState } from 'react';
import { ControlledModal } from './ControlledModal';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <h1>hello Modal</h1>
      </ControlledModal>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide Modal' : 'Show Modal'}
      </button>
    </>
  );
}

export default App;
