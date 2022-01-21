import React, { useContext } from "react";
import Card from "../card/Card";
import FavoriteContext from "../components/FavoriteContext";
import ListPost from "../components/ListPost";

export default function Favorites() {
  const favorites = useContext(FavoriteContext);
  let content;
  if (favorites.totalFavorites >= 1) {
    content = <ListPost arrPosts={favorites.favorites} />;
  } else {
    content = <p>Favorites is empty right now</p>;
  }
  return (
    <div>
      <Card>{content}</Card>
    </div>
  );
}
