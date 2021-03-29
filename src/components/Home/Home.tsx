import React from "react";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Misc from "../../hoc/Misc/Misc";
import Flex from "../UI/Flex/Flex";
import Cards from "../../containers/Cards/Cards";
import NewCardPanel from "../NewCard/NewCardPanel";
import "./Home.css";

function Home() {
  return (
    <Misc>
      <Header/>
      <Container>
        <Flex direction="col">
          <NewCardPanel/>
        </Flex>

        <Cards/>
      </Container>
    </Misc>
  );
}

export default Home;
