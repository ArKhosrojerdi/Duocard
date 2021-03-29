import React, {useState} from 'react';
import Flex from "../UI/Flex/Flex";
import {ErrorFields} from "../../types/ErrorFields";
import * as WORD_TYPES from "../../types/WordTypes";
import {IRootState} from "../../store";
import type {IWord} from "../../types/Word";
import {Constants} from "../../store/actions";
import {connect} from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Box from './Box';
import Settings from "./Settings/Settings";
import {CardActions, CardContent, CardHeader, Container} from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import axios from "../../axios-cards";
import {throws} from "assert";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxShadow: "0 2px 16px rgba(127, 127, 127, .5)",
  },
  header: {
    padding: 0
  },
  actions: {
    padding: 0
  }
}));

const StyledButton = styled(Button)`
  background-color: #43a047;
  width: 10rem;
  margin: auto;

  :hover {
    background-color: #388e3c;
  }
`;

const mapStateToProps = (state: IRootState) => state;

interface IMapActionsToProps {
  setWords: (word: IWord[]) => any
}

type Props = IRootState & IMapActionsToProps;

function NewCardPanel(props: Props) {
  const classes = useStyles();

  const [errors, setErrors] = useState<ErrorFields>({
    text: false,
    tran: false,
    lang: false,
    pos: false
  });
  const [word, setWord] = useState<string>("");
  const [tran, setTran] = useState<string>(""); // Translation
  const [lang, setLang] = useState<number>(0); // Language
  const [pos, setPos] = useState<string>(WORD_TYPES.NOUN);

  const handleSetWord = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWord(event.target.value as string);
  };
  const handleSetTranslation = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTran(event.target.value as string);
  };
  const handleSetLang = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as number);
  };
  const handleSetPos = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPos(event.target.value as string);
  };

  const addWordHandler = () => {
    let flag: boolean[] = [false, false, false, false];

    flag[0] = word === "";
    flag[1] = tran === "";
    flag[2] = lang === -1;
    flag[3] = pos === "";

    if (flag.some(f => f)) {
      setErrors({
        text: flag[0],
        tran: flag[1],
        lang: flag[2],
        pos: flag[3]
      });
      return 0;
    }

    setErrors({
      text: false,
      tran: false,
      lang: false,
      pos: false
    });

    let newWords = [...props.words];
    const id = newWords.length > 0 ? newWords[newWords.length - 1].id + 1 : 0;
    newWords.push({
      id: id,
      text: word,
      tran: tran,
      lang: lang,
      pos: pos
    });
    props.setWords(newWords);
    axios.post('/cards.json', newWords).then().catch(err => {
      throw err;
    });
  }

  const Add = (
    <StyledButton
      variant="contained"
      color="primary"
      size="large"
      onClick={addWordHandler}
    >
      Add
    </StyledButton>
  );

  return (
    <MuiCard className={classes.root} variant={"outlined"}>
      <CardContent>
        <CardHeader
          className={classes.header}
          title="Add a new card"
        />
        <hr style={{
          border: "none",
          borderTop: "1px solid #e8e8e8"
        }}/>
        <br/>

        <Flex direction="col">
          <Settings
            handlers={{lang: handleSetLang, pos: handleSetPos}}
            errors={{lang: errors.lang, pos: errors.pos}}
            values={{lang: lang, pos: pos}}
          />
          <br/>
          <Flex direction="row" justify="center" gap={1}>
            <Box
              input={handleSetWord}
              error={errors.text}
              label="New Word"
              placeholder="Enter your new word here..."
            />
            <Box
              input={handleSetTranslation}
              error={errors.tran}
              label="Translation"
              placeholder="Enter the translation here..."
            />
          </Flex>
        </Flex>
        <br/>

        <CardActions className={classes.actions}>
          {Add}
        </CardActions>
      </CardContent>
    </MuiCard>
  )
}

const mapActionsToProps = (dispatch: any) => ({
  setWords: (words: IWord[]) => dispatch({type: Constants.SET_WORDS, payload: words}),
  addWord: (word: IWord) => dispatch({type: Constants.ADD_WORD, word: word})
})

export default connect(mapStateToProps, mapActionsToProps)(NewCardPanel);
