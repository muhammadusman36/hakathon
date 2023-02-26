import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app } from "../config/firebase";
// import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const AuthContext = createContext();
function AuthContextProvider({ children }) {
    // New User SignUp in App

    //   Old User Login
    const auth = getAuth(app);
    const [users, setUser] = useState(null);
    const [authe, setAuthe] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // ...
                setUser(user);
                setAuthe(false);
            } else {
                // User is signed out
                // ...
                setAuthe(false);
                setUser(null);
            }
        });
    });
    const isLoggedIn = users ? true : false;

    //   SignOut user
    const SignOut = async () => {
        await auth.signOut();
        // toast("User SignOut")
    };

    // storing data in firebase
    const firestore = getFirestore(app);

    // Storage in firebase
    const storage = getStorage(app);

    const addEvents = async (title, location, date, time, cover, name, description) => {
        const imageREf = ref(
            storage,
            `uploads/images//${Date.now()}-${cover.name}`
        );
        const uploadedImg = await uploadBytes(imageREf, cover);
        await addDoc(collection(firestore, "Events"), {
            title,
            location,
            date,
            time,
            imageURL: uploadedImg.ref.fullPath,
            description,
            name,
            userID: users.uid,
            userEmail: users.email,
            displayName: users.displayName,
            userPhotoURL: users.photoURL,
        });
    };

    // read document
    const readList = () => {
        return getDocs(collection(firestore, "Events"));
    };
    // download img

    const getImgURL = (path) => {
        return getDownloadURL(ref(storage, path));
    };

    // get single document
    const getSingleBook = async (id) => {
        const docRef = doc(firestore, "Events", id);
        const result = await getDoc(docRef);
        return result;
    };

    // place order

    const orderBook = async (bookId, quantity) => {
        const collectionRef = collection(firestore, "Events", bookId, "order");
        const result = await addDoc(collectionRef, {
            userName: users.displayName,
            userID: users.uid,
            userEmail: users.email,
            displayName: users.displayName,
            userPhotoURL: users.photoURL,
            quantity,
        });
        return result;
    };

    // orders
    const [Loader, setLoader] = useState();
    const fetchMyEvents = async (userId) => {
        const collectionRef = collection(firestore, "Events");
        const q = query(collectionRef, where("userID", "==", userId));
        const results = await getDocs(q);
        setLoader(results);
        return results;
    };
    const Findbooks = Loader ? false : true;
    // order

    const getOrder = async (bookId) => {
        const collectionRef = collection(firestore, "Events", bookId, "order");
        const result = await getDocs(collectionRef);
        return result;
    };

    // store users

    const storeuser = async (name, email) => {

    }
    return (
        <>
            <AuthContext.Provider
                value={{
                    app,
                    isLoggedIn,
                    storeuser,
                    SignOut,
                    authe,
                    addEvents,
                    readList,
                    getImgURL,
                    getSingleBook,
                    orderBook,
                    fetchMyEvents,
                    users,
                    firestore,
                    getOrder,
                    Findbooks,
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    );
}
export const useAuthContext = () => {
    return useContext(AuthContext);
};
export default AuthContextProvider;
