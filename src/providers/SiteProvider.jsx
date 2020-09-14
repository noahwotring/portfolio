import React,{Component,UserContext,createContext} from 'react';
import {firestore} from '../firebase.js';

const generateNewsPosts = async () => {
  let collectedPosts = [];
  const userPostsRef = firestore.collection('posts').where('owner_id','==', `${user.uid}`);
  const snapshot = await userPostsRef.get();
  try {
    const userPosts = await userPostsRef.get();
    userPosts.forEach(doc => {
      collectedPosts.push({title: doc.data().title,
                            body: doc.data().body,
                            owner_id: doc.data().owner_id,
                            owner : doc.data().owner,
                            date: doc.data().date_created,
                            id: doc.id
                          })
    });
    collectedPosts.forEach((doc) => console.log(doc));
    checkPosts(collectedPosts.sort(function(a,b){return b.id-a.id}));
    } catch (error) {
      console.error("Error fetching data", error)
    }
  }
  firestore


  useEffect(() => {
    generateNewsPosts()
  },[])
