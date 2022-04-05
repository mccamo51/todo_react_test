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
      <div className="flex justify-between px-7">
        <button
          onClick={(e) => {
            logoutHandler();
          }}
        >
          Logout
        </button>
        <h2 className="text-center mb-4">The Latest From Those You Follow</h2>
        <Link href="/Post">
          <button className="bg-blue-700 p-1 rounded-lg text-white">
            New Post
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap w-full justify-center">
        {allPost.map((post) => {
          return (
            <div className="p-4" key={post._id}>
              <Link href={`/post/${post._id}`}>
                <div>
                  <div>
                    <img src="https://gravatar.com/avatar/7905d373cfab2e0fda04b9e7acc8c879?s=300" />
                  </div>
                  <div className="w-[300px]">
                    <p className="text-[30px] font-serif text-2xl">
                      {post.title}
                    </p>
                    <div className="flex space-x-1 justify-between">
                      <p className="text-[12px] font-bold">
                        By: {post.author.username}
                      </p>
                      <p className="items-center">-</p>
                      <p className="text-[12px] font-bold">
                        Date: {new Date(post.createdDate).toDateString()}
                      </p>
                      <p className="items-center">-</p>
                      <p className="text-[12px] font-bold">Views: 200</p>
                    </div>
                    <p className="text-ellipsis overflow-hidden truncate w-auto">
                      {post.body}
                    </p>
                  </div>
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
