import React, {
  PropsWithChildren,
  useContext,
  useSyncExternalStore,
} from 'react';
import { Store, useStoreData, UseStoreReturnType } from './store';

const StoreContext = React.createContext<UseStoreReturnType | null>(null);

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): [Store, (value: Partial<Store>) => void] => {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error('Store is not set!.Set the store first');
  }
  const state = useSyncExternalStore(store.subscribe, store.get);
  return [state, store.set];
};
