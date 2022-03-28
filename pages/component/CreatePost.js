import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function AddNewPost(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:8080/create-post", {
        title,
        body,
        token: localStorage.getItem("token"),
      });
      console.log(response);
    } catch (error) {
        console.log("faled")
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          AddNewPost(e);
        }}
      >
        <div class="form-group">
          <label for="post-title" class="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autofocus
            name="title"
            id="post-title"
            class="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autocomplete="off"
          />
        </div>

        <div class="form-group">
          <label for="post-body" class="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            class="body-content tall-textarea form-control"
            type="text"
          ></textarea>
        </div>

        <button class="btn btn-primary">Save New Post</button>
      </form>
    </div>
  );
}
