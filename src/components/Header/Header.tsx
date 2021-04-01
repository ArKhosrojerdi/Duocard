import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxShadow: "0 4px 6px rgba()",
    backgroundColor: "#1e88e5",
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  title: {
    marginBottom: theme.spacing(.5),
    color: "#e3f2fd",
    textDecoration: "none",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    marginLeft: theme.spacing(2),
    // border: "1px solid rgba(250,250,250,.25)",
    textDecoration: "none",
    color: "#dfdfdf",

    '&:hover': {
      color: "#fafafa",
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between"
  },
  mobileTitle: {
    display: "block",

    [theme.breakpoints.up('sm')]: {
      display: "none"
    },
  },
  normalTitle: {
    display: "none",

    [theme.breakpoints.up('sm')]: {
      display: "block"
    },
  },
}));


function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <div className={classes.box}>
          <Link to="/" className={classes.title}>
            <Typography variant="h5" color="inherit" className={classes.normalTitle}>
              DuocarD
            </Typography>

            <Typography variant="h5" color="inherit" className={classes.mobileTitle}>
              D
            </Typography>
          </Link>

          <div className={classes.row}>
            <Link to="/add-library" className={classes.link}>
              {/*<Typography variant="subtitle2">*/}
              Add Library
              {/*</Typography>*/}
            </Link>
            <Link to="/add-word" className={classes.link}>
              {/*<Typography variant="subtitle2">*/}
              Add Word
              {/*</Typography>*/}
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
