"use client";
import React, { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the 'MealIdeas' component
import itemsData from './items.json';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // Initialize selectedItemName as null
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate('/week8/page.js')
    }
  }, [user, navigate]);



  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }

  // Event handler to handle item selection
  const handleItemSelect = (item) => {
    let itemName;
    let cleanName;

    if (item.name.includes(",")) {
      itemName = item.name.split(",");
      cleanName = itemName[0].trim();
    } else {
      itemName = item.name.split(" ");
      cleanName = itemName[0].trim();
    }
    let withOutEmoji = cleanName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(withOutEmoji);
  };

  // return (
  //   <main className="max-w-3xl mx-auto p-4 flex">
  //       <div className="flex-1 max-w-sm m-2">
  //           <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
  //           <NewItem onAddItem={handleAddItem} />
            
  //           <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass the handleItemSelect function */}
            
  //       </div>
  //       <div className="flex-1 max-w-sm m-2">

  //           <div className="flex-1 max-w-sm m-2">
  //           <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as the ingredient prop */}
  //           </div>
  //       </div>
      
  //   </main>
  // );
  return (
    <main className="max-w-3xl mx-auto p-4 flex">
      {user && ( // Render the page content only if the user is logged in
        <div className="flex-1 max-w-sm m-2">
          <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      )}
      <div className="flex-1 max-w-sm m-2">
        <div className="flex-1 max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );

}
