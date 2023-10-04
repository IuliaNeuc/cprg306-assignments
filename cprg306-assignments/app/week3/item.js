// Define a functional component named 'Item that accepts three props: name, quantity, category
export default function Item({name, quantity, category})
{
    return(
        // Render a list item element with specific styling classes for appearance
        <li className="border p-4 my-2 rounded-lg shadow-md"> 
            <div className="flex justify-between"> {/* Create a flex container with space between its children */}
                <div className="flex flex-col">{/* Create a flex container for the item name and category */}
                    <span className="text-lg font-semibold">{name}</span>
                    <span className="text-gray-500">{category}</span>
                </div>
                <span className="text-xl font-semibold">{quantity}</span> {/* Render the item quantity with a larger font size and bold style on the right side. */}
            </div> 
        </li>
    );
}
