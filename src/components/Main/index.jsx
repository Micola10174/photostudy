import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "../../pages/home";

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    )
}

export default Main
