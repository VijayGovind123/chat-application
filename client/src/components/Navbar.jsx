import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1>Chat App</h1>
      <div>
        <span>
          Username : <b>{props.name}</b>
        </span>
        <span>
          Room Id &nbsp;&nbsp;&nbsp;: <b>{props.room}</b>
        </span>
      </div>
    </div>
  );
}
export default Navbar;
