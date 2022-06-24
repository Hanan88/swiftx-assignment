import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BarApp, ItemList } from './styles';

const Header = () => {
  return (
    <BarApp>
      <div>
        <ul>
          <ItemList>women</ItemList>
          <ItemList>men</ItemList>
          <ItemList>kids</ItemList>
        </ul>
      </div>
      <div><ShoppingBagIcon/></div>
      <div>
        <ShoppingCartIcon />
      </div>
    </BarApp>
  );
};

export default Header;
