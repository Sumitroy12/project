import React from 'react'
import {Switch, Route} from 'react-router-dom'
import page1 from '../pages/page1'
import page2 from '../pages/page2'

function routes() {
    return (
        <div>
            <Switch>
                <Route  exact path="/" component={page1} />
                <Route path="/next" component={page2}  />
            </Switch>
        </div>
    )
}

export default routes
