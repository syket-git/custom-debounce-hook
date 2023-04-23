import { useState, useEffect } from "react";

const useDebounce = (inputValue, time = 300) => {
  const [debounceValue, setDebouceValue] = useState(inputValue);

  useEffect(() => {
    const debouceTimer = setInterval(() => {
      setDebouceValue(inputValue);
    }, time);

    return () => {
      clearInterval(debouceTimer);
    };
  }, [inputValue, time]);

  return { debounceValue };
};

export default useDebounce;
