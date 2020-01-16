import React from 'react';
import {Container} from "@material-ui/core";
import UserForm from "../containers/UserForm";

const UserCreator = (props) => {
    return (
        <Container>
            <UserForm {...props}/>
        </Container>
    );
};

export default UserCreator;