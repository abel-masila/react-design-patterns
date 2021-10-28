import { useState, useEffect } from 'react';
export const ControlledForm = () => {
  const [nameInputErrror, setNameInputErrror] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hairColor, setHairColor] = useState('');

  useEffect(() => {
    if (name.length < 2) {
      setNameInputErrror('Name must be two or more characters');
    } else {
      setNameInputErrror('');
    }
  }, [name]);

  return (
    <form>
      {nameInputErrror && <p>{nameInputErrror}</p>}
      <input
        value={name}
        name="name"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        name="age"
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        value={hairColor}
        name="hairColor"
        type="text"
        placeholder="Hair color"
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
