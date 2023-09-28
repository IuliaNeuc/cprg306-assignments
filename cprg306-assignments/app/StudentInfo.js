// Import the Link component from the Next.js library
import Link from "next/link";

// Define the main functional component for StudentInfo
export default function StudentInfo(){
    return(

        <div>
            {/* Render the MyName component */}
           < MyName/> 
           {/* Render the MyCourseSection component */}
           <MyCourseSection/>
           {/* Render the MyGitHubLink component */}
           <MyGitHubLink/>
        </div>

    );
}

// Define the MyName component
function MyName(){
    return<h1>My Name is Iulia Neuc</h1>;
}

// Define the MyCourseSection component
function MyCourseSection(){
    return <h1>My Course Section is CPRG306-D</h1>;
}

// Define the MyGitHubLink component
function MyGitHubLink()
{
    return <Link href="https://github.com/IuliaNeuc/cprg306-assignments.git"><h1>My GitHub Link: https://github.com/IuliaNeuc/cprg306-assignments.git </h1></Link> ;
}