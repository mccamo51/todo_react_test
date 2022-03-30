import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useState } from "react";
import axios from "axios";
import DispatchContext from "../../store/DispatchContext";
import actions from "../../store/actions";
import { BASEURL } from "../../store/StorageKey";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(DispatchContext);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BASEURL + "/login", {
        username,
        password,
      });
      if (response.data.token !== undefined) {
        console.log("wertyui", response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.username);
        localStorage.setItem("avatar", response.data.avatar);
        dispatch({ type: actions.login });
      } else {
        alert("Cannot be empty");
      }
    } catch (e) {
      // console.log("cccccc", e);
    }
  };
  return (
    <form onSubmit={loginHandler}>
      <div className="w-full flex h-screen p-10 px-[10%] justify-center bg-gray-300 shadow-md">
        <div className="bg-white flex-[0.4] rounded-l-2xl pt-3 h-auto">
          <Image className="" src="/1.jpg" width={60} height={40} />

          <div className="items-center justify-center flex flex-col h-3/4">
            <p className="mb-10 font-extrabold text-[20px] justify-start w-[90%] text-blue-900">
              Login
            </p>

            <Input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="rounded-lg items-center p-1 justify-start flex"
              style={{ width: "90%" }}
              size="large"
              placeholder="Username"
              prefix={<UserOutlined className="p-1 text-slate-400 mb-1" />}
            />
            <Input.Password
              className="rounded-lg w-[90%] mt-4"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="input password"
              width={{ width: "60%" }}
              prefix={<LockOutlined className="p-1 text-slate-400 mb-1" />}
            />
            <div className="flex justify-between w-[90%]">
              <div className="flex">
                <p className="py-[5px] cursor-pointer mt-3 text-gray-400">
                  Register
                </p>
                <p className="py-[5px]  cursor-pointer mt-3 text-gray-400 ml-3">
                  Forgot password?
                </p>
              </div>
              <button className="px-3 py-[5px] bg-blue-800 rounded-md cursor-pointer mt-3 text-white">
                Sign In
              </button>
            </div>
          </div>
          <div className="flex justify-between w-[90%] items-center pl-4">
            <p className="text-gray-400 p-2 cursor-pointer">Login with</p>

            <div className="flex">
              <p className="text-blue-900 m-2 cursor-pointer">facebook</p>
              <p className="text-blue-900 m-2 cursor-pointer">twitter</p>
              <p className="text-blue-900 m-2 cursor-pointer">google</p>
            </div>
          </div>
        </div>
        <div
          className="bg-hero-pattern bg-no-repeat bg-cover flex-[0.6] 
        rounded-r-2xl shadow-md "
        >
          <div className="flex flex-col items-center">
            <h1 className="text-white text-sm justify-center">
              Start planning your <br />
            </h1>
            <p className="text-white font-extrabold text-[50px] ">Journey</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
