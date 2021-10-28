import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(resourceUrl);
      setResource(resp.data);
    })();
  }, [resourceUrl]);

  return resource;
};
