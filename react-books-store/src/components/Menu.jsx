import React from 'react'
import {Menu} from 'semantic-ui-react'

const MenuComponent = () => (
    <Menu>
    <Menu.Item name='browse' onClick={this.handleItemClick}>
      Books Shop
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup' onClick={this.handleItemClick}>
       Total <b>0</b>
    </Menu.Item>

      <Menu.Item name='help' onClick={this.handleItemClick}>
       Сart <b>0</b>
    </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;