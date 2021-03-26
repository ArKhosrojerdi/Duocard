import React from 'react';
import Grid from "../../components/UI/Grid/Grid";
import Card from "../../components/Card/Card";
import "./Cards.css";
import type {Word} from "../../types/Word";
import {connect} from "react-redux";
import type {RootState} from "../../store";


const mapStateToProps = (state: RootState) => state;

type Props = RootState & {
  removeHandler: any;
};

class Cards extends React.Component<Props, {}> {
  render() {
    console.log(this.props.words)
    return (
      <Grid col={3}>
        {this.props.words.map((word: Word, index: number) =>
          <Card
            key={index}
            word={word}
            removeHandler={this.props.removeHandler}
          />
        )}
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Cards);
