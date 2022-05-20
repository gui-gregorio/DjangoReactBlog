import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    appBar:{
        borderBottom: `1px solid ${theme.palette.divider}`,

    },
}));

function Header(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <CssBaseLine/>
            <AppBar
                position = "static"
                color="white"
                elevation={0}
                className={classes.appBar}
                >
                <ToolBar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Blog
                    </Typography>
                </ToolBar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;

