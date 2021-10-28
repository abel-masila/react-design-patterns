import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/current-user');
      setUser(resp.data);
    })();
  }, []);

  return user;
};
