import React from "react";

import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import {useSelector} from 'react-redux'


function Home() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
//   console.log(isLogged);
  return isLogged ? <Dashboard /> : <LandingPage />;
}

export default Home;
