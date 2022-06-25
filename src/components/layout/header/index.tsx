import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BarApp, ItemList, Width, Logo } from './styles';
import CurrencyDropdown from './CurrencyDropdown';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div className='container'>
      <BarApp>
        <div>
          <ul>
            <ItemList><Link to='/'>All Categories</Link></ItemList>
            <ItemList><Link to='/'>Clothes</Link></ItemList>
            <ItemList><Link to='/'>Tech</Link></ItemList>
          </ul>
        </div>
        <Logo>
          <ShoppingBagIcon className='fs-1' />
        </Logo>
        <Width>
          <CurrencyDropdown />
          <Link to="/"><ShoppingCartOutlinedIcon /></Link>
        </Width>
      </BarApp>
    </div>
  );
};

export default Header;
