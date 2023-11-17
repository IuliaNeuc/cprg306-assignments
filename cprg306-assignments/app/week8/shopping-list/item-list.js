// Import necessary components and data
"use client";
import { useState } from "react";
import Item from "./item"; // Import the 'Item' component
// import items from "./items.json"; // Import data from 'items.json'

// Define a functional component named 'ItemList'.
export default function ItemList({items, onItemSelect}) {
    // State for sorting preference
    const [sortBy, setSortBy] = useState('name'); // Initialize sortBy with 'name' as the default sorting preference

    const itemsCopy = [...items];

    // Sort the items based on the sorting preference
    itemsCopy.sort((a, b) => {
        if(sortBy === "name")
        {
            return a.name.localeCompare(b.name);
        }
        else if(sortBy === "category")
        {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });


    // Function to handle sorting preference changes
    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy); // Update the sortBy state with the new sorting preference
    };

    return (
        <div>
            <div className="flex justify-center w-full">
                {/* Buttons to change sorting preference */}
                <button onClick={() => handleSortChange('name')} className="bg-orange-500 p-1 m-2 w-28">Sort By Name</button>
                <button onClick={() => handleSortChange('category')} className="bg-orange-500 p-1 m-2 w-28">Sort By Category</button>                
            </div>
            <ul className="divide-y divide-gray-300">
                {/* Map through the 'sortedItems' array and render an 'Item' component for each item. */}
                {itemsCopy.map((item, index) => (<li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                    <Item
                        key={index}
                        // Pass the 'name', 'quantity', and 'category' properties as props to the 'Item' component.
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                </li>))}
            </ul>
        </div>
    );
}