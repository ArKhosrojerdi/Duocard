import React from "react";
import {connect} from "react-redux";
import axios from "../../axios-cards";
import type {Language} from "../../types/Language";
import type {IRootState} from "../../store";
import {Constants} from "../../store/actions";
import Body from "./Body/Body";
import Misc from "../../hoc/Misc/Misc";

interface IMapActionsToProps {
  setLibraries: (libraries: Language[]) => any;
}

type Props = IRootState & IMapActionsToProps;

class Libraries extends React.Component<Props, {}> {
  componentDidMount() {
    axios.get('/libraries.json')
      .then(response => {
        const res = response.data;
        this.props.setLibraries(res[Object.keys(res)[Object.keys(res).length - 1]]);
      })
      .catch(() => this.props.setLibraries([]));
  }

  render() {
    return (
      <Misc>
        <br/>
        <Body/>
      </Misc>
    );
  }
}

const mapStateToProps = (state: IRootState) => state;

const mapActionsToProps = (dispatch: any) => ({
  setLibraries: (libraries: Language[]) => dispatch({type: Constants.SET_LIBRARIES, payload: libraries})
})

export default connect(mapStateToProps, mapActionsToProps)(Libraries);
