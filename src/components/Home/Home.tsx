import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Misc from "../../hoc/Misc/Misc";
import Flex from "../UI/Flex/Flex";
import Cards from "../../containers/Cards/Cards";
import NewCardPanel from "../NewCard/NewCardPanel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";
import Libraries from "../../containers/Libraries/Libraries";

function Home() {


  return (
    <Router>
      <Header/>
      <Container>
        {/*<Flex direction="col">*/}
        {/*  <NewCardPanel/>*/}
        {/*</Flex>*/}

        {/*<Cards/>*/}

        {/*<Libraries/>*/}

        <Route path="/" exact component={Libraries} />
        <Route path="/libraries/:id" component={Cards} />
        {/*<Route path="/edit/:wordId" component={Card} />*/}
      </Container>
    </Router>
  );
}

export default Home;
