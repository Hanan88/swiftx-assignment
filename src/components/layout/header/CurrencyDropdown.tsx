import React from 'react';
import { gql, useQuery } from '@apollo/client';
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const CurrencyDropdown = () => {
  const ALL_CURRENCY = gql`
  query currencies{
    currencies{
      label
      symbol
    }
  }`;

  const { loading, error, data } = useQuery(ALL_CURRENCY);
  console.log(data, 'cur');

  return (
    <>
      <select className="form-select float-start border-0 w-75" aria-label="Default select example">
        {data?.currencies?.length > 0 ? data?.currencies.map((currency: any) => (
          <option value={currency.label} key={currency.label}>
            {currency.label} {currency.symbol}
          </option>
        )) : null}

      </select>
    </>
  );
};

export default CurrencyDropdown;
