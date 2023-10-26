"use client";
import {useState} from "react";

export default function NewItem({onAddItem})
{
    const[name, setName] = useState("");

    const[quantity, setQuantity] = useState(1);

    const[category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        // console.log(item);
        // alert ('Name: '+ name + '\nQuantity: ' + quantity +'\nCategory: '+ category);

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <div className="flex justify-center w-full">            
            <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                <div className = "mb-2">
                    <label htmlFor="name" className="block font-bold mb-1 text-white">
                        Item Name:
                    </label>
                    <input 
                    type="text"
                    id="name" 
                    value={name} onChange={(e)=> setName(e.target.value)} 
                    required 
                    className="w-full mt-1  border-gray-300 py-2 border rounded-lg">
                    </input>
                </div>
                <div className=" flex justify-between" >
                    <div className="flex-col">
                    <label htmlFor="quantity" className="block font-bold mb-1 text-white">
                        Quantity:
                    </label>
                    <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e)=> setQuantity(Number(e.target.value))}
                    required
                    min="1"
                    max="99"
                    className="w-full px-3 py-2 border rounded-lg">
                    </input>
                    </div>
                    <div className="flex-col">
                    <label htmlFor="category" className="block font-bold mb-1 text-white">
                        Category:
                    </label>
                    <select
                    id="category"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg">
                        <option value ="produce">Produce</option>
                        <option value ="dairy">Dairy</option>
                        <option value ="bakery">Bakery</option>
                        <option value ="meat">Meat</option>
                        <option value ="frozen-food">Frozen Food</option>
                        <option value ="canned-goods">Canned Goods</option>
                        <option value ="dry-goods">Dry Goods</option>
                        <option value ="beverages">Beverages</option>
                        <option value ="snacks">Snacks</option>
                        <option value ="household">Household</option>
                        <option value ="other">Other</option>
                    </select>
                    </div>

                

                </div>
                <div>
                        <button  type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            +
                        </button>
                    </div>
            </form>
        </div>
    );
}