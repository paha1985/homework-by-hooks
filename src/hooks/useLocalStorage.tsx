import { useState, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (
  key: string
) => [
  LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(null);

  // Инициализация значения из localStorage при монтировании
  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    setValue(storedValue);
  }, [key]);

  const setItem = (newValue: LocalStorageSetValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, { setItem, removeItem }];
};