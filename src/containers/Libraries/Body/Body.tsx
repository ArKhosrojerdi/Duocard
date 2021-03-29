import React from "react";
import {connect} from "react-redux";
import type {IRootState} from "../../../store";
import Grid from "@material-ui/core/Grid";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Library from "../Library/Library";
import {Slide} from "@material-ui/core";
import {Link, useParams} from "react-router-dom";

type Props = IRootState;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
    link: {
      textDecoration: "none"
    }
  }),
);

function Body(props: Props) {
  const classes = useStyles();

  const Libraries = (
    props.languages.map((library, index) => (
      <Slide
        in={true}
        timeout={(index + 1) * 400}
        direction="left"
      >
        <Grid key={index} item xs={12} md={6}>
          <Link to={`/libraries/${index}`} className={classes.link}>
            <Library
              key={index}
              library={library}
            />
          </Link>
        </Grid>
      </Slide>
    ))
  );

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {Libraries}
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: IRootState) => state;

export default connect(mapStateToProps)(Body);
