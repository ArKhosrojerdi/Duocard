import React from 'react';
import {connect} from "react-redux";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "../../../components/Card/Card";
import type {IRootState} from "../../../store";
import {
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
        flexGrow: 1,
      },
      control: {
        padding: theme.spacing(2),
      },
    }
  )
);

type Props = IRootState & {
  removeWord?: (id: number) => any;
};

type TParams = { id: string };

function Body(props: Props) {
  const classes = useStyles();
  const id = parseInt(useParams<TParams>().id, 10);

  const Cards = (
    props.words.map((word, index) => (
      word.lang === id ?
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Card
            key={index}
            word={word}
          />
        </Grid>
        : null
    ))
  );

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {Cards}
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: IRootState) => state;

export default connect(mapStateToProps)(Body);
