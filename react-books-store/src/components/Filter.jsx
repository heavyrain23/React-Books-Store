import React from 'react'
import { Input, Menu } from 'semantic-ui-react'


const Filter = ({ setFilter, filterBy}) => (
    <Menu secondary>
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}>
          All 
        </Menu.Item>
        
        <Menu.Item
          active={filterBy === 'popular'}
          onClick={setFilter.bind(this, 'popular')}>
          Popular
          </Menu.Item>
        
        <Menu.Item
          active={filterBy === 'price_hight'}
          onClick={setFilter.bind(this, 'price_hight')}>
          Hight price   
        </Menu.Item>

         <Menu.Item
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this, 'price_low')}>
          Low price    
          </Menu.Item>
          
          <Menu.Item
          active={filterBy === 'author'}
          onClick={setFilter.bind(this, 'author')}>
          Author
          </Menu.Item>
          </Menu>

);



export default Filter;

