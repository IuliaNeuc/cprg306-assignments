import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export async function getItems(userId){

    //Initialize an empty array to store the retrieved items.
    const items = []; 

    //Create a reference to the 'items' sub collection under the 'users' collection for the specified userId 
    const userItemsRef = collection(db, 'users', userId, 'items');
    //Use the getDocs function to asynchronously fetch the documents from the 'items' sub collection.
    const querySnapshot = await getDocs(userItemsRef);
 
    //Iterate over each document in the querySnapshot.
    querySnapshot.forEach((doc) => {

     // for each document push an object into 'items' array containing the document ID and data. 
     items.push({
        id: doc.id,
        data: doc.data()
     });
    });

    //return th =e array of items, which now contains objects with document IDs and data.
    return items;

}

//Function to add a new item to a specific user's list of items

export async function addItem(userId, item){
    const userItemsRef = collection(db, 'users', userId, 'items');
    const docRef = await addDoc(userItemsRef, item);
    return docRef.id;
}

