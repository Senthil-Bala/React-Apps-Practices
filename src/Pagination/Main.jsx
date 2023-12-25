import React, { useEffect, useState } from "react";
import axios from "axios";
import Lists from "./Lists";
import Pagination from "./Pagination";
function Main() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setLoading(true);
        console.log(res.data);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  // current posts

  const lastIndex=postsPerPage*currentPage;
  const firstIndex=lastIndex-postsPerPage;
  const currentPosts=posts.slice(firstIndex,lastIndex);

  //paginate

  const paginate= pageNumber=>setCurrentPage(pageNumber);
  return (
    <div>
      <h1>Paginations</h1>
      <Lists posts={currentPosts} loading={loading}/>
      <Pagination paginate={paginate} totalPosts={posts.length} postsPerPage={postsPerPage}/>
    </div>
  );
}

export default Main;
