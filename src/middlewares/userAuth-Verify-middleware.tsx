import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-Config";

const useAuthVerifyUser = function () {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState<any | null>(null);

    // Function to handle authentication state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setIsAuthenticated(true);
                setCurrentUser(user);
            } else {
                // User is signed out
                setIsAuthenticated(false);
                setCurrentUser(null);
            }
        });

        // Clean-up function to unsubscribe from the auth state observer
        return () => unsubscribe();
    }, []);

    return { isAuthenticated, currentUser };
}

export default useAuthVerifyUser;
