import React from 'react'
import {Menu} from 'semantic-ui-react'

const MenuComponent = () => (
    <Menu>
    <Menu.Item name='browse'>
      <b>Books Shop</b> 
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup' >
       Total: &nbsp; <b>0</b>&nbsp;euro.
    </Menu.Item>

      <Menu.Item name='help' >
       Сart &nbsp; <b>0</b>
    </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;