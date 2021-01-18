import App from "./App";
import Main from "./main";
import {Route, BrowserRouter} from "react-router-dom";
import React from 'react'

function Rout() {
    return (
        <div>
            <Route exact path = "/" component={App}  />
            <Route exact path = "/main" component={Main}  />
        </div>
    )
}

export default Rout;
