import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    boxShadow: "0 4px 6px rgba()",
    backgroundColor: "#1e88e5",
    marginBottom: theme.spacing(5)
  },
  title: {
    margin: theme.spacing(1),
    color: "#e3f2fd",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Typography className={classes.title} variant="h4" color="textPrimary">
        <Box textAlign="center" m={1}>
          DuoCarD
        </Box>
      </Typography>
    </AppBar>
  );
}

export default Header;
