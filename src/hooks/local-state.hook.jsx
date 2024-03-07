import React from 'react';

const useLocalState = (key, defaultValue) => {
  const getLocalStorageValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  const [state, setState] = React.useState(() => getLocalStorageValue());

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalState;
