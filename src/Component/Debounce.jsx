import React, { useEffect, useState } from "react";
import useDebounce from "../useDebounce";

const Debounce = () => {
  const [inputValue, setInputValue] = useState("");
  const { debounceValue } = useDebounce(inputValue);

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Debounce;
