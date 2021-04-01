import firebase, { DataBase } from '../../firebase'


const createUserInDatabase = (id, displayName,photoURL="") => {
    DataBase.collection("users").doc(id).set({
        photoURL: photoURL,
        displayName: displayName,        
        nickName: "",
        fallowers: 0,
        following: [""],        
        likes: 0
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export default createUserInDatabase