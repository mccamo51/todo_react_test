import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL, TokenString } from "../../store/StorageKey";
import { useRouter } from "next/router";
function postDetails({ data }) {
  const [title, setTitle] = useState("Now");
  const [body, setBody] = useState(
    "When exporting a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps. This is useful if you want to fetch data that changes often, and"
  );

  async function deleteSinglePost(id) {
    try {
      const response = await axios.delete(BASEURL + "/post/" + id, {
        token: localStorage.getItem(TokenString),
      });
      console.log(response.data);
      console.log(localStorage.getItem(TokenString));
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
    <div>
      <div className="flex justify-between p-7">
        <button
          onClick={(e) => {
            // editSinglePost(data._id);
          }}
          className="bg-blue-600 p-1 text-white text-sm"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            deleteSinglePost(data._id);
          }}
          className="bg-red-500 p-1 text-white text-sm"
        >
          Delete
        </button>
      </div>
      {<img src={`${data["author"]["avatar"]}`} width={200} />}

      <p>{data["title"]}</p>
      <p>{data["body"]}</p>
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
