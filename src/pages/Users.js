import React from 'react';
import {Container} from "@material-ui/core";
import UsersList from "../containers/UsersList";

const Users = (props) => {
    return (
        <Container>
            <UsersList {...props}/>
        </Container>
    );
};

export default Users;