import React from "react";
import Post from "./Post";
import Styles from "../styles/listPosts.module.css";

export default function ListPost(prop) {
  //Passong data comes from home deliver to item
  return (
    <div className={Styles.listPosts}>
      <ul>
        {/*Expect to get an array from parent component(home) */}
        <li>
          {prop.arrPosts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                photo={post.photo}
                content={post.content}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
}
