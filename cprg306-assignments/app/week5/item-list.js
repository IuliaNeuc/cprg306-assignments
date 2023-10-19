// Import necessary components and data
"use client";
import { useState } from "react";
import Item from "./item"; // Import the 'Item' component
import items from "./items.json"; // Import data from 'items.json'

// Define a functional component named 'ItemList'.
export default function ItemList() {
    // State for sorting preference
    const [sortBy, setSortBy] = useState('name'); // Initialize sortBy with 'name' as the default sorting preference

    // Sort the items based on the sorting preference
    let sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            // Sort items by name using localeCompare
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            // Sort items by category using localeCompare
            return a.category.localeCompare(b.category);
        }
    });


    // Function to handle sorting preference changes
    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy); // Update the sortBy state with the new sorting preference
    };

    return (
        <div>
            <div>
                {/* Buttons to change sorting preference */}
                <button onClick={() => handleSortChange('name')} className="bg-orange-500 p-1 m-2 w-28">Sort By Name</button>
                <button onClick={() => handleSortChange('category')} className="bg-orange-500 p-1 m-2 w-28">Sort By Category</button>                
            </div>
            <ul className="divide-y divide-gray-300">
                {/* Map through the 'sortedItems' array and render an 'Item' component for each item. */}
                {sortedItems.map((item, index) => (
                    <Item
                        key={index}
                        // Pass the 'name', 'quantity', and 'category' properties as props to the 'Item' component.
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}