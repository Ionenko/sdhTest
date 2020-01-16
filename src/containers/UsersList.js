import React, {Component} from 'react';
import {connect} from 'react-redux';
import {default as Users} from "../components/UsersList";
import {fetchUsers, deleteUser} from '../redux/actions/users';
import {compose} from "redux";

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    goToUserDetails(id){
        const {history} = this.props;
        history.push(`/users/${id}`);
    }

    deleteItem(e, id){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        let answer = window.confirm('Are you sure?');

        if (answer) {
            this.props.deleteUser(id)
        }

    }

    render() {
        const {items, loading} = this.props;

        return (
            <Users

                loading={loading}
                items={items}
                goToUserDetails={this.goToUserDetails.bind(this)}
                deleteItem={this.deleteItem.bind(this)}
            />
        );
    }
}

const mapStateToProps = (
        {
            users: {
                items,
                loading,
                error
            }
        }
    ) => {
    return {
        items,
        loading,
        error
    }
};

const mapDispatchToProps = {
    fetchUsers,
    deleteUser
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersList);