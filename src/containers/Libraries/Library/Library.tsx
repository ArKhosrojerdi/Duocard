import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import type {Language} from "../../../types/Language";
import {Typography} from "@material-ui/core";
import styled from "styled-components";
import {createMuiTheme} from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      height: 275,
      backgroundImage: "linear-gradient(33deg, #e1f5fe, #bbdefb)",
      border: "none",
      transform: "skew(1deg, 1deg)",
      boxShadow: "0 2px 4px rgba(150, 150, 150, .75)",

      '&:hover': {
        backgroundImage: "linear-gradient(66deg, #e1f5fe, #bbdefb)",
        boxShadow: "0 4px 10px rgba(150, 150, 150, .8)",
      },

      '&:active': {
        boxShadow: "0 2px 4px rgba(180, 180, 180, .5)",
      }
    },
    content: {
      transform: "skew(-1deg, -1deg)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0)
    },
    title: {
      marginBottom: theme.spacing(2),
      textShadow: "0 0 1px rgba(13, 71, 161, .25)",
      color: "#1976d2"
    }
  })
);

type Props = {
  library: Language
}

function Library(props: Props) {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root} variant={"outlined"}>
      <CardContent className={classes.content}>
        <Typography variant="h3" className={classes.title}>
          {props.library.name}
        </Typography>
      </CardContent>
    </MuiCard>
  )
}

export default Library;
