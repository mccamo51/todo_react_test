import Head from "next/head";
import HomePage from "./component/HomePage";
import Login from "./pages/Login";
import {useState} from "react";


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {isLoggedIn ? <HomePage /> : <Login isLoggedIn={isLoggedIn}/>}
    </div>
  );
}
