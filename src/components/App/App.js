import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import './App.scss';
import Header from "../Header";
import User from "../../pages/User";
import Users from "../../pages/Users";
import UserCreator from "../../pages/UserCreator";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="content">
                    <Switch>
                        <Route exact path="/users/:id" component={User}/>
                        <Route exact path={['/users-creator', '/users-creator/:id']} component={UserCreator}/>
                        <Route exact path={['/users', '/']} component={Users} />
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default withRouter(App);
