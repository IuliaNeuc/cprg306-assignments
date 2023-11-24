

"use client"
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import Link from 'next/link';


export default function LandingPage(){
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    const [email, setEmail] = useState(null);
    

    useEffect(() => {
      // Ensure user is defined before accessing its properties
      if (user && user.email) {
        setEmail(user.email);
      }
    }, [user]);

    const handleGitHubSignIn = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    };



    return (
        <div>
          {user ? (
            // User is logged in
            <div>
              <p>Welcome, {user.displayName} ({email })</p>
              <button onClick={handleLogout}>Logout</button>
              <Link href="./shopping-list/page.js">
                Go to Shopping List
              </Link>
                            
            </div>
          ) : (
            // User is not logged in
            <div>
              <p>Please log in to continue.</p>
              <button onClick={handleGitHubSignIn}>Login with GitHub</button>
            </div>
          )}
        </div>
      );
}
 
