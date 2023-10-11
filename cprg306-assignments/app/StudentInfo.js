// Import the Link component from the Next.js library
import Link from "next/link";

// Define the main functional component for StudentInfo
export default function StudentInfo(){
    return(

        <div>
            {/* Render the MyName component */}
           < MyName name="Iulia"/> 
           {/* Render the MyCourseSection component */}
           <MyCourseSection coursename= "CPRG306-D"/>
           {/* Render the MyGitHubLink component */}
           <MyGitHubLink github="https://github.com/IuliaNeuc/cprg306-assignments.git"/>
        </div>

    );
}

// Define the MyName component
function MyName(props){
    return<h1>My Name is: {props.name}</h1>;
}

// Define the MyCourseSection component
function MyCourseSection(props){
    return <h1>My Course Section is {props.coursename} </h1>;
}

// Define the MyGitHubLink component
function MyGitHubLink(props)
{
    return <Link href="https://github.com/IuliaNeuc/cprg306-assignments.git"><h1>My GitHub Link:{props.github}</h1></Link> ;
}

