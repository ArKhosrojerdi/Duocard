import React from 'react';
import axios from "../../axios-cards";
import {connect} from "react-redux";
import {Constants} from "../../store/actions";
import type {IWord} from "../../types/Word";
import type {IRootState} from "../../store";
import Misc from "../../hoc/Misc/Misc";
import Layout from "./Layout";
import "./Cards.css";
import {Typography} from "@material-ui/core";

interface IMapActionsToProps {
  setWords: (word: IWord[]) => any;
}

type Props = IRootState & IMapActionsToProps;

class Cards extends React.Component<Props, {}> {
  componentDidMount() {
    axios.get('/cards.json')
      .then(response => {
        const res = response.data;
        this.props.setWords(res[Object.keys(res)[Object.keys(res).length - 1]]);
      })
      .catch(() => this.props.setWords([]));
  }

  render() {
    return (
      <Misc>
        <br/>
        <Layout/>
      </Misc>
    )
  }
}

const mapStateToProps = (state: IRootState) => state;

const mapActionsToProps = (dispatch: any) => ({
  setWords: (words: IWord[]) => dispatch({type: Constants.SET_WORDS, payload: words}),
});

export default connect(mapStateToProps, mapActionsToProps)(Cards);
