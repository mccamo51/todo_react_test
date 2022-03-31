import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Input } from 'antd';


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { TextArea } = Input;


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
    <div className="">
      <form
        onSubmit={(e) => {
          AddNewPost(e);
        }}
      >
        <div className="form-group mb-4">
          <label for="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <Input
            autofocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autocomplete="off"
          />
        </div>

        <div className="form-group">
          <label for="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <TextArea
            name="body"
            id="post-body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            className="body-content tall-textarea form-control"
            type="text"
          ></TextArea>
        </div>

        <button className="items-center flex mt-3 py-1 px-3 bg-sky-400 rounded-md text-white">Save New Post</button>
      </form>
    </div>
  );
}
