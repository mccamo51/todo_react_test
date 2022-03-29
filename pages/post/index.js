import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../../store/StorageKey";
function postDetails(props) {
  const [singlePost, setSinglePost] = useState({});
  async function getSinglePost() {
    try {
      const response = await axios.get(BASEURL + "post/" + props.postId);
      setSinglePost(response.data);
    } catch (error) {}
  }
  useEffect(() => {
    getSinglePost();
  }, []);

  return <div>New One</div>;
}

export default postDetails;
