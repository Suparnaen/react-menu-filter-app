import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//Get unique categories from data.json
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);



function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);//initially useState is empty array

  const filterItems = (category) => {//items is original list
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);//if item category in thelist matches with category we are passing in this method
    setMenuItems(newItems); //then set the menuitem with thisnew Item list
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>

  );
}

export default App;
