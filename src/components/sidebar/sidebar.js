import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export const Sidebar =  props => {
  return (
    <Menu>
      {props.item.map(item =>{
        return(
          <p key={item}>
            <input type="checkbox" value={item}></input> {item}
          </p>
        )
      })}
    </Menu>
    
  );
};