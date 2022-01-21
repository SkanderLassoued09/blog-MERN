import React, { useContext } from "react";
import Styles from "../styles/post.module.css";
import Card from "../card/Card";
import FavoriteContext from "./FavoriteContext";

export default function Post(prop) {
  const favoriteContext = useContext(FavoriteContext);
  const isItemExists = favoriteContext.isItem(prop.id);
  function addToFavoriteHandler() {
    if (isItemExists) {
      favoriteContext.removeFavorite(prop.id);
    } else {
      favoriteContext.addFavorite({
        id: prop.id,
        photo: prop.photo,
        title: prop.title,
        content: prop.content,
      });
    }
  }

  return (
    <Card>
      <div className={Styles.container}>
        <div className={Styles.image}>
          <img src={prop.photo} alt={prop.title} />
        </div>
        <h6> {prop.title} </h6>
        <p> {prop.content} </p>
      </div>
      <div className={Styles.action}>
        <button onClick={addToFavoriteHandler}>
          {isItemExists ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </Card>
  );
}
