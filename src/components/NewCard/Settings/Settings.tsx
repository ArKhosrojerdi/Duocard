import Libraries from "../Libraries/Libraries";
import PoS from "../PoS/PoS";
import React from "react";
import Flex from "../../UI/Flex/Flex";
import "./Settings.css";

type Error = {
  lang: boolean;
  pos: boolean;
}

type Value = {
  lang: number;
  pos: string
}

type Props = {
  handlers: any;
  errors: Error;
  values: Value;
}

function Settings(props: Props) {
  return (
    <Flex direction="row" justify="center" gap={1}>
      <Libraries
        error={props.errors.lang}
        langHandler={props.handlers.lang}
        lang={props.values.lang}
      />
      <PoS
        error={props.errors.pos}
        posHandler={props.handlers.pos}
        pos={props.values.pos}
      />
    </Flex>
  )
}

export default Settings;
