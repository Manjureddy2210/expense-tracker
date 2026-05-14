import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {

  // Get Stored Value
  const [storedValue, setStoredValue] = useState(() => {

    try {

      const item = localStorage.getItem(key);

      return item
        ? JSON.parse(item)
        : initialValue;

    } catch (error) {

      console.error(error);

      return initialValue;
    }
  });

  // Update LocalStorage
  useEffect(() => {

    localStorage.setItem(
      key,
      JSON.stringify(storedValue)
    );

  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;