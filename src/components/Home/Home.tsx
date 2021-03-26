import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Header from "../Header/Header";
import Misc from "../../hoc/Misc/Misc";
import "./Home.css";
import CardBox from "../NewCard/Box";
import Flex from "../UI/Flex/Flex";
import Cards from "../../containers/Cards/Cards";
import * as WORD_TYPES from "../../store/WordTypes/WordTypes";
import axios from "../../axios-cards";
import {Word} from "../../types/Word";
import {Language} from "../../types/Language";
import {ErrorFields} from "../../types/ErrorFields";

const StyledButton = styled(Button)`
  margin: 1rem 0;
  background-color: #43a047;
  width: 10rem;

  :hover {
    background-color: #388e3c;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

function Home() {
  useEffect(() => {
    axios.get('/cards.json')
      .then(response => {
        const res = response.data;
        setWords(res[Object.keys(res)[Object.keys(res).length - 1]]);
      })
      .catch(() => setWords([]));
  }, []);

  const [word, setWord] = useState<string>("");
  const [tran, setTran] = useState<string>(""); // Translation
  const [lang, setLang] = useState<number>(0); // Language
  const [langs, setLangs] = useState<Language[]>([
    {
      id: 0,
      name: "English"
    },
    {
      id: 1,
      name: "Spanish"
    },
  ]);
  const [words, setWords] = useState<Word[]>([]);
  const [pos, setPos] = useState<string>(WORD_TYPES.NOUN);
  const [errors, setErrors] = useState<ErrorFields>({
    text: false,
    tran: false,
    lang: false,
    pos: false
  });

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

    let newWords = [...words];
    const id = newWords.length > 0 ? newWords[newWords.length - 1].id + 1 : 0;
    newWords.push({
      id: id,
      text: word,
      tran: tran,
      lang: lang,
      pos: pos
    });
    setWords(newWords);
    axios.post('/cards.json', newWords);
  }
  const removeWordHandler = (id: number) => {
    const newWords = words.filter(w => w.id !== id);
    setWords(newWords);
    axios.post('/cards.json', newWords);
  }

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

  return (
    <Misc>
      <Header/>
      <Container>
        <Flex direction="col">
          <Typography
            variant="h5"
            color="textPrimary"
            gutterBottom
          >
            Add a new Card
          </Typography>
          <br/>
          <Flex direction="row" justify="center" gap={1}>
            <CardBox
              input={handleSetWord}
              label="Word"
              placeholder="Write a new word..."
              langHandler={handleSetLang}
              pos={pos}
              posHandler={handleSetPos}
              lang={lang}
              langs={langs}
              isWord
              error={{text: errors.text, pos: errors.pos, lang: errors.lang}}
            />
            <CardBox
              input={handleSetTranslation}
              label="Translation"
              placeholder="Write the translation..."
              error={{text: errors.tran}}
              pos=""
            />
          </Flex>
          <Flex
            direction="row"
            align="center"
            justify="center"
          >
            <StyledButton
              variant="contained"
              color="primary"
              size="large"
              onClick={addWordHandler}
            >
              Add
            </StyledButton>
          </Flex>
        </Flex>

        <Cards
          removeHandler={removeWordHandler}
        />
      </Container>
    </Misc>
  );
}

export default Home;
