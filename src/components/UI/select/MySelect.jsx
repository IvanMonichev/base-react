import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      value={value}
      className="my-select"
      onChange={evt => onChange(evt.target.value)}
    >
      <option disabled={true} value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  );
};

export default MySelect;
