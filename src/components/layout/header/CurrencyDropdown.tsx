import React, { useState } from 'react';
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const CurrencyDropdown = () => {
  const [currency, setCurrency] = useState<string>('');

  return (
    <>
      <select className="form-select float-start border-0 w-50" aria-label="Default select example">
        <option value="1">&#36; USD</option>
        <option value="2">&#8364; EUR</option>
        <option value="3">&#165; JPY</option>
      </select>
    </>
  );
};

export default CurrencyDropdown;
