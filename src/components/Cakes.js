import React from 'react';
import {useState} from "react";
import './Cakes.css';
import Menu from './Menu';
import Categories from './Categories';
import items from './kolaci';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Cakes() {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {

        if (category === 'all') {
            setMenuItems(items);
            return;
        }

        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
          <section className="menu section">
            <div className="title">
              <h2>Recepti</h2>
              <div className="underline"></div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </section>
        </main>
      );
    }

    
    
    export default Cakes;