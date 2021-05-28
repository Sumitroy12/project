import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { Table } from 'react-bootstrap';
const url = "https://my.api.mockaroo.com/animal.json?key=fb0a3040";

function Page1() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        method: "Get",
      })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
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
        <h1>This is page 1</h1>
        <h4>Wait for some time data to load </h4>
        <p>or</p>
        <h4>press below button to page 2</h4>
        <p>Note: This api provides dynamic data so for each time page loads data will change</p>
        
        <Link to={"/next"}>
          <button variant="primary">Page2</button>
        </Link>
        <br />
        {user.length ===0 && <Loader type="ThreeDots" color="black"/>}

        <Table striped bordered hover style={{width:"70vh"}}>
        <thead>
        <tr>
          <th>Animal</th>
          <th>Value</th>
        </tr>
      </thead>
        <tbody>
        {user.map((data) => (
          
            <tr> 
                <td>{data.title}</td>
                <td>{data.value}</td>
            </tr>
        ))}</tbody> 
        </Table>
      </center>
    </div>
  );
}

export default Page1;
