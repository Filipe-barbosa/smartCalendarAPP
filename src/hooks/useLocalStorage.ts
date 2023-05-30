import { useState, useEffect } from 'react';
import { InputForm } from '../types/InputForm';

function getStorageValue(key: string, defaultValue: InputForm[]) {
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : null;

  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: InputForm[]) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
};
