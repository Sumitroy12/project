import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

// import "./profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  localStorage.setItem(user.name, name);
  return (
    <>
      {
        <div className="main">
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="name"
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>
      }
    </>
  );
}
