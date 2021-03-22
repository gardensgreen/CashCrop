import React from "react";
import NavBar from "./Pages/shared/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <NavBar></NavBar>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Root;
