import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    list: {
        listStyle:  'none',
        padding: 0
    }
}));

const UsersItem = (props) => {
    const classes = useStyles();

    const {
        first_name,
        last_name,
        birth_date,
        gender,
        deleteItem
    } = props;

    const fullName = first_name + ' ' + last_name;

    return (
        <Fragment>
            <ListItemAvatar>
                <Avatar alt={fullName} src="/static/images/user.svg" />
            </ListItemAvatar>
            <ListItemText>
                <Typography
                    component="h6"
                    variant="h6"
                    color="textPrimary"
                >
                    {fullName}
                </Typography>
                <ul className={classes.list}>
                    <li>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {'Birth date: '}
                        </Typography>
                        {birth_date}
                    </li>
                    <li>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {'Gender: '}
                        </Typography>
                        {gender}
                    </li>
                </ul>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton
                    onClick={deleteItem}
                    edge="end"
                    aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </Fragment>
    );
};

export default UsersItem;