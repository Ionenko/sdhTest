import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(2)
    },
    list: {
        '& > li': {
            paddingLeft: 0,
            paddingRight: 0
        },
    },
    avatar: {
        width: 248,
        height: 248,
        margin: 'auto'
    },
    buttons: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: 5,
    },
    details: {
        paddingLeft: 20
    }
}));

const UserDetails = (props) => {
    const classes = useStyles();

    const {
        id,
        first_name,
        last_name,
        birth_date,
        gender,
        job,
        biography,
        is_active,
        deleteItem,
        goToUserCreator
    } = props;

    const fullName = first_name + ' ' + last_name;

    return (
        <Paper className={classes.content} elevation={4}>

            <Grid container>
                <Grid item xs={12} md={4}>
                    <Avatar className={classes.avatar} alt={fullName} src="/static/images/user.svg" />
                    <Grid item xs={12} className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<EditSharpIcon />}
                            onClick={() => goToUserCreator(id)}
                        >
                            Edit user
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteSharpIcon />}
                            onClick={() => deleteItem(id)}
                        >
                            Delete user
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} className={classes.details}>
                    <Typography variant="h4" component="h4" >
                       {fullName}
                    </Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemText>
                                <strong>Birth date: </strong>
                                <span>{birth_date}</span>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <strong>Gender: </strong>
                                <span>{gender}</span>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <strong>Job: </strong>
                                <span>{job}</span>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <strong>User is active: </strong>
                                <span>{is_active ? 'active':'disabled'}</span>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <strong>Biography: </strong>
                                <p>{biography}</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserDetails;