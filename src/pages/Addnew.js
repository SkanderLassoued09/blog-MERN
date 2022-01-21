import React, { useRef } from "react";
import Card from "../card/Card";
import Styles from "../styles/addnew.module.css";

export default function Addnew() {
  const photo = useRef();
  const title = useRef();
  const content = useRef();

  function inputHandler(e) {
    e.preventDefault();
    const userData = {
      title: title.current.value,
      photo: photo.current.value,
      content: content.current.value,
    };
    fetch("https://blog-cbec8-default-rtdb.firebaseio.com/blog.json", {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then(() => console.log("Success"))
      .catch(() => console.log("ERROR"));
  }

  return (
    <Card>
      <form className={Styles.formContainer} onSubmit={inputHandler}>
        <div className={Styles.photoContainer}>
          <label>Cover of your post</label>
          <input type="text" placeholder="Enter URL " ref={photo} required />
        </div>
        <div className={Styles.titleContainer}>
          <label>Title of your post</label>
          <input
            type="text"
            placeholder="Meaningful title"
            ref={title}
            required
          />
        </div>
        <div className={Styles.contentContainer}>
          <label>Right here your content</label>
          <input
            type="text"
            placeholder="Describe your thoughts"
            ref={content}
            required
          />
        </div>
        <div className={Styles.action}>
          <button>Add post</button>
        </div>
      </form>
    </Card>
  );
}
