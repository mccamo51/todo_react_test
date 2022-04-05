import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL, TokenString } from "../../store/StorageKey";
import { useRouter } from "next/router";
import { Avatar } from "antd";
function postDetails({ data }) {
  const [title, setTitle] = useState("Now");
  const [body, setBody] = useState(
    "When exporting a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps. This is useful if you want to fetch data that changes often, and"
  );

  async function deleteSinglePost(id) {
    try {
      const response = await axios.delete(BASEURL + "/post/" + id, {
        data: {
          token: localStorage.getItem(TokenString),
        },
      });
      console.log(response.data);
      console.log(localStorage.getItem(TokenString));
      window.history.back()
    } catch (error) {
      // console.log(localStorage.getItem(TokenString));
      console.log(error);
    }
  }

  async function editSinglePost(id) {
    try {
      const response = await axios.post(BASEURL + "/post/" + id + "/edit", {
        token: localStorage.getItem(TokenString),
        title,
        body,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center w-[60%] items-center">
      <div>
        <div className="h-2/6 w-full bg-blue-500 ">
          <div className="flex justify-between">
            <button onClick={()=>deleteSinglePost(data["_id"])}>Complex App</button>
            <div>Helloo</div>
          </div>
        </div>
        <h2 className="text-[20px] font-bold ">{data["title"]}</h2>
        <div className="flex mt-2 items-center">
          <Avatar
            src={<img src={`${data["author"]["avatar"]}`} sizes={40} />}
          />
          <p className="ml-1">Created by {data["author"]["username"]}</p>
        </div>

        <p>{data["body"]}</p>
      </div>
    </div>
  );
}

export default postDetails;

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const response = await axios.get(BASEURL + "/post/" + query.id);
  const data = response.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { data } };
}
