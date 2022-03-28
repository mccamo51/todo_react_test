import Link from "next/link";
import React from "react";

function HomePage(props) {
  function logoutHandler() {
    props.setIsLoggedIn(false);
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
  }

  return (
    <div className="flex flex-col py-5">
      <div className="flex justify-between">
        <h2 className="text-center mb-4">The Latest From Those You Follow</h2>
        <Link href="/Post">
          <button className="bg-blue-700 p-1 rounded-lg mr-3 text-white">
            New Post
          </button>
        </Link>
      </div>
      <div className="flex pr-3">
        <a href="#" className="list-group-item list-group-item-action">
          <img
            className="avatar-tiny"
            src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
          />{" "}
          <strong>Example Post #1</strong>
          <span className="text-muted small">by brad on 2/10/2020 </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <img
            className="avatar-tiny"
            src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"
          />{" "}
          <strong>Example Post #2</strong>
          <span className="text-muted small">by barksalot on 2/10/2020 </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <img
            className="avatar-tiny"
            src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
          />{" "}
          <strong>Example Post #3</strong>
          <span className="text-muted small">by brad on 2/10/2020 </span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <img
            className="avatar-tiny"
            src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"
          />{" "}
          <strong>Example Post #4</strong>
          <span className="text-muted small">by barksalot on 2/10/2020 </span>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
