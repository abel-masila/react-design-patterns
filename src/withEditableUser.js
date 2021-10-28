import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const resp = await axios.get(`/users/${userId}`);
        setOriginalUser(resp.data);
        setUser(resp.data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const resp = await axios.put(`/users/${userId}`, {
        user,
      });
      setUser(resp.data);
      setOriginalUser(user);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };
    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
