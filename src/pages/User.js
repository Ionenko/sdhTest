import React from 'react';
import {Container} from "@material-ui/core";
import UserDetails from "../containers/UserDetails";

const User = (props) => {
    return (
        <Container>
            <UserDetails {...props}/>
        </Container>
    );
};

export default User;