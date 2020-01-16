import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GroupIcon from '@material-ui/icons/Group';
import {Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: '#fff',
        background: theme.background
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 0,
    },
    row: {
        justifyContent: 'space-between'
    },
    buttons: {
        color: 'white',

        '& > a': {
            color: 'white'
        },
    },
    logo: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar className={classes.row}>
                        <Link className={classes.logo} to='/'>
                            <Typography variant="h6" className={classes.title}>
                                App
                            </Typography>
                        </Link>
                        <Typography className={classes.buttons}>
                            <Link to='/users'>
                                <IconButton
                                    aria-label="users list"
                                    component="span"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <GroupIcon />
                                </IconButton>
                            </Link>
                            <Link to='/users-creator'>
                                <IconButton
                                    aria-label="create user"
                                    component="span"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <GroupAddIcon />
                                </IconButton>
                            </Link>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;
