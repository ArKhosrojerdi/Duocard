import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Cards from "../../containers/Cards/Cards";
import NewCardPanel from "../NewCard/NewCardPanel";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./Home.css";
import Libraries from "../../containers/Libraries/Libraries";
import NewLibrary from "../NewLibrary/NewLibrary";

function Home() {


  return (
    <Router>
      <Header/>
      <Container>
        <Switch>
          <Route path="/libraries/:id" component={Cards}/>
          <Route path="/add-word" component={NewCardPanel}/>
          <Route path="/add-library" component={NewLibrary}/>
          <Route path="/" exact component={Libraries}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default Home;
