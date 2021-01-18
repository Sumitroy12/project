import React, { Component } from "react";
import "./App.css";
import Main from "./main";
import {Switch, Route} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//https://ui-reel-2b08d.firebaseapp.com/__/auth/handler
// firebase.initializeApp({
//   apiKey: "AIzaSyBzdg8pNdcDGY-TD1TNe0x_z4Qk3lFdbxo",
//   authDomain: "ui-reel-2b08d.web.app"
// })

class App extends Component {
  // state = { isSignedIn: false };
  constructor(){
    super()
    this.state={
      isSignedIn: false
    }
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = (props) =>{
    
    firebase.auth().onAuthStateChanged(user => {
        this.setState({
          ...this.state,
          isSignedIn:!!user})
    })
  }
  render() {
    if(this.state.isSignedIn){
      this.props.history.push("/main")
    }
    // sessionStorage.setItem("name",JSON.stringify(this.state.isSignedIn))
    // console.log(this.props);
    // console.log("this is it",this.state.isSignedIn);
    return (
      <div className="App">
        <Paper>
          <img
            className="app_headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Pic"
          />
          <hr></hr>
          <form>
            {this.state.isSignedIn ? (
              // this.props.history.push("/main")
                // console.log("here")
                <span>
                <button onClick={() => firebase.auth().signOut()}>Signout</button>
              </span>
            ) : (
              <StyledFirebaseAuth uiConfig = {this.uiConfig} firebaseAuth = {firebase.auth()} />
            )}
            
          </form>
        </Paper>
      </div>
    );
  }
}

export default App;
