import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import Loader from "react-loader-spinner";
const url = "https://my.api.mockaroo.com/animal.json?key=fb0a3040";

// const user_data=[]

function Page2() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        method: "Get",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("pagae2",data)
          setUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);
  }, []);
  
  return (
    <div>
      <center>
        <h1>This is page 2</h1>
        <h4>Wait for some time for data to load</h4>
        <p>or</p>
        <h4>press below button to page 1</h4>
        <p>Note: This api provides dynamic data so for each time page loads data will change</p>

        <Link to={"/"}>
          <button variant="primary">Page1</button>
        </Link>
        <br />
        {user.length ===0 && <Loader type="ThreeDots" color="black"/>}

        <br />
        <br />
        <PieChart label={(props) => { return props.dataEntry.title;}} labelStyle={{
          fontSize: '3px'
        }} data={user} paddingAngle={1} style={{width:"70vh", height:"70vh"}}/>
      </center>
    </div>
  );
}

export default Page2;
