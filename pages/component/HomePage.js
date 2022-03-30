import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import actions from "../../store/actions";
import StateContext from "../../store/StateContext";
import axios from "axios";
import { BASEURL } from "../../store/StorageKey";
import DispatchContext from "../../store/DispatchContext";

function HomePage() {
  const { dispatch } = useContext(DispatchContext);
  const [allPost, setAllPost] = useState([]);
  function logoutHandler() {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
    dispatch({ type: actions.logout });
  }
  async function getallPost() {
    try {
      const response = await axios.get(BASEURL + "/profile/amo/posts");
      setAllPost(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getallPost();
  }, []);

  return (
    <div className="flex flex-col py-5">
      <div className="flex justify-between">
        <button
          onClick={(e) => {
            logoutHandler();
          }}
        >
          Logout
        </button>
        <h2 className="text-center mb-4">The Latest From Those You Follow</h2>
        <Link href="/Post">
          <button className="bg-blue-700 p-1 rounded-lg mr-3 text-white">
            New Post
          </button>
        </Link>
      </div>
      <div className="flex">
        {allPost.map((post) => {
          return (
            <div className="p-4" key={post._id}>
              <Link href={`/post/${post._id}`}>
                <div>
                  <img className="avatar-tiny" src={post.author.avatar} />
                  <strong>{post.title}</strong>
                  <span className="text-muted small">
                    created by {post.author.username}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
{
}
