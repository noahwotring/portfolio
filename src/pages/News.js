import React, {useContext,useState, useEffect} from 'react';
import NewsPost from '../components/NewsPost.js';
import './home.css';
import {generateNewsPosts,firestore} from  '../firebase.js'
import {UserContext} from "../providers/UserProvider";

const Home = () => {
  const user = useContext(UserContext);
  const[posts,checkPosts] = useState([]);
  const [potentialPost,editPotentialPost] = useState(" ");
  const [potentialPostTitle,editPotentialPostTitle] = useState(" ");


  const onChangeHandler = (event) => {
    if(event.target.id === "potentialPostText"){
      editPotentialPost(event.target.value);
      console.log(potentialPost);
    }
    if(event.target.id === "potentialPostTitle"){
      editPotentialPostTitle(event.target.value)
    }
  }

 //

    //submitting new post
    const submitNewPost = async (postTitle,postBody) => {
      var endId = posts.length + 1;
      var owner_id = user? user.uid : null;
      var owner = user? user.displayName : null;
      var postData = {
        owner_id: owner_id,
        title: postTitle,
        body: postBody,
        owner: user.name,
      };
      console.log(postData);

      try {
      const res = await firestore.collection('/posts/').doc(`${endId}`).set({
        owner_id: owner_id,
        owner: owner,
        title: postTitle,
        body: postBody,
        date_created: new Date()


      });
      return
    } catch {
      alert('failure with' + postData.owner + postData.owner_id + postData.title + postData.body)
    }
    }

    const checkForPosts = () => {
      generateNewsPosts().then(result => checkPosts(result));
    }
    useEffect(checkForPosts,[])

    return (


      <div className="ml-16 relative container border inline-block bg-gray-100 bg-opacity-25 " >
        <h1 className="text-center text-5xl mt-3 font-semibold"> News and Discussion Page</h1>
        <div className="container news_post_container mx-auto md:w-10/12  opacity-75 box item-center ">
          {posts.sort((a,b) => {return a.date_created-b.date_created}).map((post) => <NewsPost body={post.body} title={post.title} owner_id={post.owner_id} owner={post.owner} date={post.date_created} />)}
          <div className="submitPost container block bg-grey-600 rounded-lg">
            <div className="form block flex box-content w-half">
            <div className="center_block m-auto w-half">
              <h3 className="text-center my-5"> Submit a New Post </h3>

              <form>
                <div className="labelinputblock label_block inline-block">
                  <label className=""> Title {" "} </label>
                  <input
                    className="title_draft"
                    onChange={(event) => onChangeHandler(event)}
                    id="potentialPostTitle"
                  />
                </div>
                <br /> <br />{" "}
                <textarea
                  className="post_draft block"
                  value={potentialPost}
                  id="potentialPostText"
                  onChange={((event) => onChangeHandler(event))}
                  />
                  <button className="block float-right m-3 shadow  " onClick={() => submitNewPost(potentialPostTitle,potentialPost)}> Submit </button>
                </form>
                </div>
              </div>
           </div>

         </div>


      </div>
    )
  }


export default Home;
