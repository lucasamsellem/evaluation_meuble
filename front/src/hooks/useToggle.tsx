import { useCallback, useState } from 'react';

function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse } as const;
}

export default useToggle;
