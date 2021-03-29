import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import Card from "../../components/Card/Card";
import {IRootState} from "../../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

type Props = IRootState & {
  removeWord?: (id: number) => any;
};

function Layout(props: Props) {
  const classes = useStyles();

  const Cards = (
    props.words.map((word, index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
        <Card
          key={index}
          word={word}
        />
      </Grid>
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

export default connect(mapStateToProps)(Layout);
