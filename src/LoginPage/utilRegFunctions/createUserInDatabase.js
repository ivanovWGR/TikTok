import firebase, { DataBase } from '../../firebase'


const createUserInDatabase = (id, displayName,photoUrl="") => {
    DataBase.collection("users").doc(id).set({
        photoUrl: photoUrl,
        displayName: displayName,        
        nickName: "",
        followers: 0,
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