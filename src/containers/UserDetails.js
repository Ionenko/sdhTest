import React, {Component} from 'react';
import {default as User} from "../components/UserDetail";
import {compose} from "redux";
import {connect} from "react-redux";
import {deleteUser, fetchUser} from "../redux/actions/users";
import Spinner from "../components/Spinner";

class UserDetails extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchUser(id);
    }

    goToUserCreator(id){
        const {history} = this.props;
        history.push(`/users-creator/${id}`);
    }

    deleteItem(id){
        const {history} = this.props;
        let answer = window.confirm('Are you sure?');

        if (answer) {
            this.props.deleteUser(id, history)
        }
    }

    render() {
        const {user, loading} = this.props;
        return loading ? (<Spinner/>) : user ? (
            <User
                deleteItem={this.deleteItem.bind(this)}
                goToUserCreator={this.goToUserCreator.bind(this)}
                {...user} />
        ) : null
    }
}

const mapStateToProps = (
    {
        users: {
            user,
            loading,
            error
        }
    }
) => {
    return {
        user,
        loading,
        error
    }
};

const mapDispatchToProps = {
    fetchUser,
    deleteUser
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UserDetails);
