import React, {Component} from 'react';
import {default as Form} from '../components/UserForm';
import {format} from 'date-fns';
import { withStyles  } from '@material-ui/core/styles';
import {addUser, fetchUser, updateUser, resetUser} from "../redux/actions/users";
import {connect} from "react-redux";
import {compose} from "redux";
import {Formik} from 'formik';
import * as Yup from 'yup';
import Spinner from "../components/Spinner";

const styles = theme => ({
    root: {
        justifyContent: 'left',

        '& > div': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    },
    content: {
        padding: theme.spacing(2)
    },
    button: {
        minWidth: 180
    }
});

const validationSchema = Yup.object({
    first_name: Yup.string("Enter a first name").required("Name is required")
        .min(2, 'First name must contain at least 2 characters')
        .max(256, 'First name must contain on more 256 characters'),
    last_name: Yup.string("Enter a last name").required("Name is required")
        .min(2, 'Last name must contain at least 2 characters')
        .max(256, 'Last name must contain on more 256 characters'),
    birth_date: Yup.date().nullable(),
    gender: Yup.string("Enter a gender").required("Gender is required"),
    job: Yup.string("Enter a job").required("job is required")
        .min(4, 'Job must contain at least 4 characters')
        .max(256, 'Job must contain on more 256 characters'),
    biography: Yup.string("Enter a biography").required("Biography is required")
        .min(6, 'Biography must contain at least 6 characters')
        .max(1024, 'Biography must contain on more 1024 characters'),
});

class UserForm extends Component {

    state = {
        editing: false
    };

    formRef = React.createRef();

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {id} = this.props.match.params;
        if(this.state.editing && !id){
            this.props.resetUser();
            this.setState({
                editing: false
            });
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        if(id) {
            this.setState({
                editing: true
            });
            this.props.fetchUser(id);
        } else {
            this.setState({
                editing: false
            });
            this.props.resetUser();
        }
    }


    handleSubmit = (data, {resetForm}) => {
        const {id} = this.props.match.params;

        if(!id) {
            this.props.addUser(data);
            resetForm()
        } else {
            this.props.updateUser(id, data);
        }
    };

    render() {

        const { classes, loading, user } = this.props;
        const {editing} = this.state;

        const initialFormData = {
            first_name: user ? user.first_name : '',
            last_name: user ?  user.last_name : '',
            birth_date: user ? user.birth_date : format(new Date(), 'yyyy-MM-dd'),
            gender: user ? user.gender : '',
            job: user ? user.job : '',
            biography: user ? user.biography : '',
            is_active: user ? user.is_active : false
        };

        const renderForm = () => (
            <Formik
                initialValues={initialFormData}
                validationSchema={validationSchema}
                onSubmit={this.handleSubmit.bind(this)}
            >
                {
                    (props) => (
                        <Form
                            editing={editing}
                            classes={classes}
                            {...props}
                        />
                    )
                }
            </Formik>
        );

        return !editing ? renderForm() : loading ? (<Spinner/>) : user ? renderForm() : null
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
    addUser,
    updateUser,
    resetUser
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(UserForm);