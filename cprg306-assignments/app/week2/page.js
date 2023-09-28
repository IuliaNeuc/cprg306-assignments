// Import the StudentInfo component from the "../StudentInfo.js" file
import StudentInfo from "../StudentInfo.js";


// Define the Week2Page functional component
export default function Week2Page()
{
    return(

        <div>
            {/* Display a heading for the page */}
            <h1>My Shopping List</h1>
            {/* Render the StudentInfo component within this page */}
            <StudentInfo/>
        </div>

    );

}