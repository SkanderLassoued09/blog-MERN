import React, { useState, useEffect } from "react";
import ListPost from "../components/ListPost";

export default function Home() {
  /* Check if data is loading */
  const [isLoading, setIsLaoding] = useState(true);
  /* Put data in array */
  const [dataIsReady, setDataIsReady] = useState([]);

  useEffect(() => {
    setIsLaoding(true);
    fetch("https://blog-cbec8-default-rtdb.firebaseio.com/blog.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];
        for (let key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          posts.push(post);
        }
        setIsLaoding(false);
        setDataIsReady(posts);
      });
  }, []);
  if (isLoading) {
    return <section>is loading...</section>;
  }

  return (
    <div>
      <ListPost arrPosts={dataIsReady} />
    </div>
  );
}
