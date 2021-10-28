import React, { useState, useEffect } from 'react';
import axios from 'axios';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const resp = await axios.get(resourcePath);
        setOriginalData(resp.data);
        setData(resp.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const resp = await axios.put(resourcePath, {
        [resourceName]: data,
      });
      setData(resp.data);
      setOriginalData(data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };
    return <Component {...props} data={data} {...resourceProps} />;
  };
};
