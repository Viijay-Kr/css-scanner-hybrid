import React, { useEffect } from 'react';
import {
  getAvailableBrowsers,
  getAvailableVersionOfBrowser,
  useVersions,
} from '@browser-scan/scanner';
import { type Browsers } from '@browser-scan/schema';

import { useStore } from '../store/Provider';
export const SelectBrowser = () => {
  const [store, setStore] = useStore();
  const browsers = getAvailableBrowsers();

  const versions = useVersions({
    url: `http://localhost:4000/versions/${store.browser}`,
  });

  useEffect(() => {
    versions.refetch();
  }, [store.browser]);

  const onSelectBrowser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStore({
      browser: e.target.value,
    });
  };

  return (
    <div className="flex flex-row items-start justify-start gap-4">
      <select
        onChange={onSelectBrowser}
        className="select text-l outline-none focus:border-none select-primary w-1/3"
        value={store.browser}
      >
        <option disabled selected className="text-xl">
          Choose a browser
        </option>
        {Object.entries(browsers.supported_browsers).map(([key, value]) => (
          <option value={key}>{value}</option>
        ))}
      </select>

      <select className="select outline-none focus:border-none select-primary w-1/3">
        <option disabled selected>
          Choose a version
        </option>
        {Object.entries(versions.data?.supported_versions ?? {}).map(
          ([key, value]) => (
            <option value={key}>{value}</option>
          ),
        )}
      </select>
    </div>
  );
};
