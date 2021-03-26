import React, {useState} from 'react';
import MuiCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {connect} from "react-redux";
import type {Word} from "../../types/Word";
import type {RootState} from "../../store";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minWidth: 275,
    boxShadow: "0 2px 6px rgba(127, 127, 127, .25)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 24,
  },
  flip: {
    margin: "auto",
    textAlign: "center"
  },
  text: {
    transition: `all .5s ${theme.transitions.easing.easeInOut}`,
  },
  flipping: {
    transition: `all 5s ${theme.transitions.easing.easeInOut}`,
    animation: `$flipped .8s ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes flipped": {
    "0%": {
      transfrom: "rotateY(0)"
    },
    "50%": {
      transfrom: "rotateY(90deg)"
    },
    "100%": {
      transfrom: "rotateY(0)"
    }
  }
}));

const mapStateToProps = (state: RootState) => state;

type MyProps = RootState & {
  word: Word;
  removeHandler: any;
}

function Card(props: MyProps) {
  const classes = useStyles();
  const [side, setSide] = useState(true);
  let lang: string | null = null;
  for (let l of props.languages) {
    if (props.word.lang === l.id) {
      lang = l.name;
      break;
    }
  }

  return (
    <Grow
      in={true}
      style={{transformOrigin: '0 0 -16'}}
      {...({timeout: 800})}
    >
      <MuiCard className={classes.root} variant={"outlined"}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {lang}
          </Typography>
          {side ?
            <Typography
              variant="h5"
              component="h2"
            >
              {props.word.text}
            </Typography>
            :
            <Typography
              variant="h5"
              component="h2"
            >
              {props.word.tran}
            </Typography>
          }
          <Typography className={classes.pos} color="textSecondary">
            {props.word.pos}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.flip}
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              setSide(side => !side)
            }}
          >
            Flip
          </Button>

          <Button
            className={classes.flip}
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              props.removeHandler(props.word.id)
            }}
          >
            Delete
          </Button>
        </CardActions>
      </MuiCard>
    </Grow>
  );
}

export default connect(mapStateToProps)(Card);
