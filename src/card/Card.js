import React from "react";
import Styles from "./card.module.css";

export default function Card(prop) {
  // We will cover any item by this component
  return <div className={Styles.card}>{prop.children}</div>;
}
