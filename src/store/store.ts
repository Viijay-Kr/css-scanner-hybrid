import { useCallback, useRef } from 'react';
import { Browsers } from '@browser-scan/schema';
export type Store = {
  browser: string;
  version: string;
  path: string;
};

export interface UseStoreReturnType {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
}

export const useStoreData = (): UseStoreReturnType => {
  const store = useRef<Store>({
    browser: Browsers['Android Chrome'],
    version: '',
    path: '',
  });

  const get: UseStoreReturnType['get'] = useCallback(() => store.current, []);
  const set: UseStoreReturnType['set'] = useCallback((value) => {
    store.current = {
      ...store.current,
      ...value,
    };
    subscribers.current.forEach((cb) => cb());
  }, []);

  const subscribers = useRef(new Set<() => void>());

  const subscribe: UseStoreReturnType['subscribe'] = useCallback((cb) => {
    subscribers.current.add(cb);
    return () => {
      subscribers.current.delete(cb);
    };
  }, []);

  return {
    get,
    set,
    subscribe,
  };
};
