import React from 'react';

export const SelectPath = () => {
  return (
    <div className="flex flex-row items-start justify-start gap-4">
      <input
        type="text"
        placeholder="Choose file/folder path"
        className="input input-bordered input-primary input-md w-full"
      />
      <button className="btn btn-primary">Choose file/folder</button>
    </div>
  );
};
