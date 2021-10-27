import React from 'react';
import { useState, useEffect } from 'react';
import axio from 'axios';
export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axio.get('/current-user');
      setUser(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
