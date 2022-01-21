import React from "react";
import Navbar from "../components/Navbar";
import Styles from "./layout.module.css";

export default function Layout(prop) {
  return (
    <div>
      <Navbar />
      <main className={Styles.main}>{prop.children}</main>
    </div>
  );
}
