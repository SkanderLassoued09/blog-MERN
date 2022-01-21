import React, { useContext } from "react";
import Styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import FavoriteContext from "./FavoriteContext";

export default function Navbar() {
  const favorites = useContext(FavoriteContext);
  const totalFavorite = favorites.totalFavorites;
  return (
    <div className={Styles.navbar}>
      <div className={Styles.logo}>
        <h3>Blog</h3>
      </div>
      <div className={Styles.links}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/add"}>Add post</Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              Favorites <span>{totalFavorite}</span>
            </Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
