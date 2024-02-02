import React from 'react'; 
import { slide as Menu } from 'react-burger-menu';

const Mobile = (props) => { 
  return (
    <Menu {...props}>
      <a className="text-sm" href="/">
        Home
      </a>
      <a className="text-sm" href="/salads">
        Salads
      </a>
      <a className="text-sm" href="/pizzas">
        Pizzas
      </a>
      <a className="text-sm" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};

export default Mobile;
