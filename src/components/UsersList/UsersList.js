import React, {Fragment} from 'react';
import UsersItem from "../UsersItem";
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Spinner from "../Spinner";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const UsersList = (props) => {

    const {
        items,
        loading,
        goToUserDetails,
        deleteItem
    } = props;

    const classes = useStyles();


    return loading ? (<Spinner/>) : items.length > 0 ?
        (
            <Paper elevation={4}>
                <List className={classes.list}>
                    {
                        items.map((user, index) => {
                            return (
                                <Fragment key={user.id}>
                                    <ListItem onClick={() => goToUserDetails(user.id)} alignItems="flex-start" button>
                                        <UsersItem deleteItem={(e) => deleteItem(e, user.id)} {...user} />
                                    </ListItem>
                                    {
                                        items.length - 1 > index ? (<Divider component="li"/>) : null
                                    }
                                </Fragment>
                            )
                        })
                    }
                </List>
            </Paper>
        ) : (
            <Typography variant="h5" component="h5">
                Users list is empty
            </Typography>
        );
};

export default UsersList;