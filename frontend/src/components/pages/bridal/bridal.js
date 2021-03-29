import React, { Component } from "react";
import card from "./bridaldata";
import "../photographer/vendorcard.css";
import { Link} from "react-router-dom";

class photographer extends Component {
    state = {
        value :""
    }
  getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  onChange = e =>{
      this.setState({value : e.target.value});
  }

    
  render() {
    const data = this.getUnique(card, "location");
    const {value} = this.state;
    
    return (
        // -----------------------------------------------dropdown----------------------------------
      <div>
        <div className="containerD">
          <div className="control">
            <center>
              <select class="drop" id="setLocation" value={value} onChange={this.onChange}>
                {/* <option className="location">Location</option> */}
                {data.map((item) => {
                  return (
                    <>
                      <option value={item.location}>{item.location}</option>
                    </>
                  );
                })}
              </select>
            </center>
          </div>
        </div>

        {/* ----------------------------------- Card------------------------------------------ */}

        <div className="main_content">
              {!value?card.map((item) => (           
            <>
              <div className="container" key={item.id} >
                <main className="grid">
                  <article className="card_img">
                    <img alt="" src={item.vendor_image} />
                    <figure
                      className="cards__item__pic-wrap"
                      data-category={item.flag}
                    ></figure>
                    <div className="text">
                      <h5>{item.vendor_name}</h5>
                        <div>
                          <ul className="left">
                            <li>Location:{item.location}<hr /></li>
                            <li>Budget:{item.charge}<hr /></li>
                          {/* </ul>
                          <ul className="right"> */}
                            <li>Rating:{item.ratings}<hr /></li>
                            <li>{item.day}<hr /></li>
                          </ul>
                        </div>
                        <Link 
                        to={{
                        pathname: "/vendorprofile"}}>   
                        <button onClick={()=>{
                          sessionStorage.setItem("user", item.vendor_name);
                        }}>See Profile</button>
                        </Link>
                    </div>
                  </article>
                </main>
              </div>
            </>
          )):
           
          card.map((item) => (
            item.location===value&&
            <>
              <div className="container" key={item.id} >
                <main className="grid">
                  <article className="card_img">
                    <img alt="" src={item.vendor_image} />
                    <figure
                      className="cards__item__pic-wrap"
                      data-category={item.flag}
                    ></figure>
                    <div className="text">
                      <h5>{item.vendor_name}</h5>
                        <div>
                          <ul>
                            <li>Location: {item.location}</li>
                            <li>{item.charge}</li>
                            <li>{item.ratings}</li>
                            <li>{item.day}</li>
                          </ul>
                        </div>
                        <Link 
                        to={{
                        pathname: "/vendorprofile"}}>   
                        {/* pathname: "/vendorprofile/"+item.vendor_name}}> */}
                        <button>See Profile</button>
                        </Link>
                    </div>
                  </article>
                </main>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default photographer;
