import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  return (
    <main>
      {items.map(el => (
        <Item key={el.id} item={el} />
      ))}
    </main>
  );
}

export default ItemList;
