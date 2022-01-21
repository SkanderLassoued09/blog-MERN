import React, { createContext, useState } from "react";

/* Init our context */
const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (post) => {},
  removeFavorite: (postId) => {},
  isItem: (postId) => {},
});
export function FavoriteContextProvider(prop) {
  const [favorites, setFavorites] = useState([]);
  function addFavorite(post) {
    return setFavorites((prevFav) => prevFav.concat(post));
  }
  function removeFavorite(postId) {
    setFavorites((prevFav) => {
      return prevFav.filter((post) => post.id !== postId);
    });
  }
  function isItem(postId) {
    return favorites.some((post) => post.id === postId);
  }

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    isItem: isItem,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {prop.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
