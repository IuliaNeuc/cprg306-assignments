"use client";
import React, { useState, useEffect } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the 'MealIdeas' component
import { useUserAuth } from './_utils/auth-context';
import getItems from './shopping-list-service.js';
import addItem from './shopping-list-service.js';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // Initialize selectedItemName as null
  const { user } = useUserAuth();
  const navigate = useNavigate();

   const loadItems = async () => {
    try{
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
    catch(error){
      console.error('Error loading items:', error);
    }
   };

  useEffect(() => {
    //Ensure the user is logged in before loading items
    if(user){
      loadItems();
      
    }
    else{
      navigate('/week10/page.js')
    }
  }, [user, navigate]);



  //Event handler to handle adding an item
  const handleAddItem = async(newItem) => {
    try{
      // Call addItem to add the item to the shopping list, using user.uid as the userId
      const newItemId = await addItem(user.uid, newItem);

      // Set the id of the new item
      newItem.id = newItemId;
      // Update the state of items to include the new item
      setItems([...items, newItem]);
    }
    catch(error){
      console.error('Error adding item:', error);
    }
    
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
