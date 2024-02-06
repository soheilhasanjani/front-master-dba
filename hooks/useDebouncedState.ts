import { useState, useEffect } from "react";

function useDebouncedState(initialValue: any, delay: number = 600) {
  const [state, setState] = useState(initialValue);
  const [debouncedState, setDebouncedState] = useState(initialValue);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => clearTimeout(debounceTimeout);
  }, [state, delay]);

  return [state, debouncedState, setState];
}

export default useDebouncedState;
