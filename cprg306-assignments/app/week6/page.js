"use client";
import { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';






export default function Page()
{
    // Initialize state variable 'items' with data from itemsData
    const [items, setItems] = useState(itemsData);

    // Event handler to add a new item to the 'items' state
    const handleAddItem = (newItem) => 
    {
        setItems([...items, newItem]);
    }
return(
    <main  className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem = {handleAddItem}/>
        <ItemList items = {items}/>
    </main>
);

}