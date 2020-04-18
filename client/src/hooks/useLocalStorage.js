import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) =>{
    const [storedValue, setStoredValue] = useState(() =>{
    const darkMode = window.localStorage.getItem(key)
    return darkMode ? JSON.parse(darkMode) : initialValue;
    });
const setValue = (value) =>{
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
};;
return [storedValue, setValue]
}

export default useLocalStorage