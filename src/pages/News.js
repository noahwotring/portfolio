import React, {useContext,useState, useEffect} from 'react';
import NewsPost from '../components/NewsPost.js';
import {generateNewsPosts,firestore} from  '../firebase.js'
import {UserContext} from "../providers/UserProvider";
import './css/news.css'

const News = () => {
  const user = useContext(UserContext);
  const[posts,checkPosts] = useState([]);
  const [potentialPost,editPotentialPost] = useState(" ");
  const [potentialPostTitle,editPotentialPostTitle] = useState(" ");

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  const sortByPersonFirst = (a,b) => {  return  a.owner > b.owner ? 1 : -1};
  const sortByDateFirst = (a,b) => {return b.date_created-a.date_created};
  const sortByDateLast = (a,b) => {return b.date_created > a.date_created ? -1 : 1};




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
      var date = new Date();
      alert(date)
      var postData = {
        owner_id: owner_id,
        title: postTitle,
        body: postBody,
        owner: owner,
        date_created: date
      };
      alert(postData.date);


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

    const revealSearchOptions = () => {

      let list = document.querySelector('ul.searchList');
      list.classList.toggle('seeMe');
      console.log(list)
    }
    const [postNum, addPostNum] = useState(0)
    let x = 0;

    return (


      <div className=" relative pt-8 text-center block rounded-sm main  " >
        <h1 className="text-center text-6xl mt-3 mb-8  font-semibold newsH1"> What's the <span className="italic"> Gossip ?  </span></h1>
        {/*
        <button type="button" onClick={() => revealSearchOptions()} > Search Button </button>
        <ul className="searchList ">
          <li>title-ascending </li><br />
          <li>title-descending</li><br /> (a,b) => {return b.date_created-a.date_created}
        </ul>
        */}

        <div className=" news_post_container mx-auto w-12/12 md:w-12/12 mt-8 opacity-75 box item-center ">
          {posts.sort((a,b) => sortByDateLast(a,b)).map((post) => <NewsPost postNum={x+=1} body={post.body} title={post.title} id={post.id} owner_id={post.owner_id} owner={post.owner} date_created={timeConverter(post.date_created.seconds)} />)}
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


export default News;
