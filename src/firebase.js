import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBXlXcnnyTOWmI4SfdWPkpDOv6xfTlzG_0",
    authDomain: "userdatabasepractice.firebaseapp.com",
    databaseURL: "https://userdatabasepractice.firebaseio.com",
    projectId: "userdatabasepractice",
    storageBucket: "userdatabasepractice.appspot.com",
    messagingSenderId: "418266214563",
    appId: "1:418266214563:web:eb5e2878b6545093240f16",
    measurementId: "G-B8CY4W80BN"
  };
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default  firebase;
export const session = firebase.auth.Auth.Persistence.SESSION;
export const local  = firebase.auth.Auth.Persistence.LOCAL;

export const generateUserDocument = async (user,additionalData) => {
    if(!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
      const {email,displayName,photoURL} = user;
      try {
        await userRef.set({
          user,
          email,
          photoURL,
          ...additionalData
        });
        console.log(displayName);
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  export const getUserDocument = async uid => {
    if(!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
    };
    } catch (error) {
      console.error("Error fetching data", error)
    }
  };
  export const getAllUsers = async () => {
    const usersRef = await firestore.collection('users');
    let userNames = [];
    try {
      const userQuery = await usersRef.get();
      userQuery.forEach(doc => {
        userNames.push(doc.data().displayName)
      })
      return userNames
    }
    catch(e){
      console.log(e);
    }
  }
  export const generateNonUserPage = async (userName) => {
    const usersRef = await firestore.collection(`users`);
    try {

      const queryRef = await usersRef.where('displayName', '==', `${userName}`).get();

      let pageOwnerDoc;
      queryRef.forEach(doc => {
        pageOwnerDoc = {
          displayName: doc.data().displayName,
          interests: doc.data().interests,
          aboutMe: doc.data().aboutMe,
          photoURL: doc.data().photoURL,
          email: doc.data().email

        }
      })

      return pageOwnerDoc
    }catch(e){
      console.log(e);
    }


  }

  export const generateNewsPosts = async (justOwned = false) => {
    let collectedPosts = [];
    const postsRef = firestore.collection('posts');


    try {
      const userPosts = await postsRef.get();
      userPosts.forEach(doc => {
        collectedPosts.push({title: doc.data().title,
                              body: doc.data().body,
                              owner_id: doc.data().owner_id,
                              owner : doc.data().owner,
                              date: doc.data().date_created,
                              id: doc.id
                            })
      });
      return collectedPosts;
      } catch (error) {
        console.error("Error fetching data", error)
      }
    }
  export const generateScore = async () => {
    let allScores = [];
    const scoresRef = firestore.collection('scores');
    try {
      const scores = await scoresRef.get();
      scores.forEach(sc => {
        allScores.push({
          score: sc.data().score,
          uid: sc.data().uid
        });
      });
      return allScores;
    } catch(error) {
      console.log(error);
    }
  }

  export const updateUserProfilePicture = async (uid,picURL) => {
    if(!uid) return null;
    console.log("successfull");
    const userRef = await firestore.doc(`users/${uid}`).update({photoURL:picURL});
  }
  export const updateUserRep = async (uid,rep) => {
    if(!uid) return null;
    console.log('success');
    const userRef = await firestore.doc(`users/${uid}`).update({rep: rep});
  }
  export const updateUserDisplayName = async (uid,newDisplayName) => {
    if(!uid) return null;
    console.log("success");
    const userRef = await firestore.doc(`users/${uid}`).update({displayName: newDisplayName});
  }
