import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post
        profilePic="https://www.goalcast.com/wp-content/uploads/2019/06/Robert-Downey-Jr-in-Iron-Man.jpg"
        message="It works!"
        timestamp="This is a timestamp"
        username="Tony stark"
        image="https://i.pinimg.com/originals/7f/5c/ef/7f5cef12d41e3bb5880aa814577c500c.jpg"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/c/c1/Team_Korea_Russia_WorldCup_02_%28cropped%29.png"
        message="It works too!"
        timestamp="This is a timestamp"
        username="Heung-min Son"
        image="https://i.guim.co.uk/img/media/75726284c42da8e641482ed5197621c33e602dd5/0_177_3274_1965/master/3274.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=429d132aeedee7f6215c0cd376ba51fb"
      /> */}
    </div>
  );
}

export default Feed;
