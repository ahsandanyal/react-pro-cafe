import './App.css';
import React,{useState} from 'react';
import Category from "./Category";
import Menu from './Menu';
import items from './data.js';

const allCategories = ["all", ...new Set(items.map((item)=> item.category))];
function App() {
  const[menuItems, setMenuItems] = useState(items);
  const[categories, setCategories] = useState(allCategories);

  const filterItems = (category)=>{
    if(category === ""){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
    <section className='menu-section'>
     <div className='title'>
       <h2 className=''>Our Menu</h2>
     </div>
     <div className='underline'></div>
     <Category categories={categories} filterItems={filterItems}/>
     <Menu items={menuItems}/>
    </section>
    </main>
  );
}

export default App;
