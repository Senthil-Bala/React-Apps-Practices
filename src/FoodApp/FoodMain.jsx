import React, { useEffect, useState } from 'react';
import Data from "./FoodData";
import FoodCard from './FoodCard';
import ButtonsFilters from './ButtonsFilters';

function FoodMain() {
  const [items, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((values) => values.category))];

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(Data); // Show all items when 'All' is selected
    } else {
      const newItems = Data.filter((value) => value.category === category);
      setItems(newItems);
    }
  }

  useEffect(() => {
    console.log(Data);
  }, []);

  return (
    <div>
      <ButtonsFilters menu={menuItems} filters={filterItems} />
      <FoodCard items={items} /> {/* Use filtered items here */}
    </div>
  );
}

export default FoodMain;
