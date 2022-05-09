import { useState, useEffect } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: string | Function
) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (initialValue instanceof Function) {
      return initialValue();
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("show value after set " + value);
  }, [key, value]);

  return [value, setValue];
}
