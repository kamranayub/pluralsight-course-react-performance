import { useEffect, useState } from 'react';

const createSharedStateHook = (initialValue) => {
  let sharedState = initialValue;
  const listeners = new Set();

  const useSharedState = () => {
    const [, setState] = useState(sharedState);

    useEffect(() => {
      const listener = () => setState(sharedState);
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    }, []);

    const setSharedState = (newState) => {
      sharedState = newState;
      listeners.forEach(listener => listener());
    };

    return [sharedState, setSharedState];
  };

  return useSharedState;
};

export default createSharedStateHook;