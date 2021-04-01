import React, {useState} from 'react';
import {IRootState} from "../../store";
import {Constants} from "../../store/actions";
import {connect} from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {CardActions, CardContent, CardHeader, Grid} from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import axios from "../../axios-cards";
import type {ILibrary} from "../../types/Library";
import TextField from "@material-ui/core/TextField";
import {FormControl} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    boxShadow: "0 2px 16px rgba(127, 127, 127, .5)",
  },
  header: {
    padding: 0
  },
  actions: {
    paddingBottom: 0
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 10rem)"
  },
  input: {
    width: "100%"
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

const Small = styled.small`
  color: #f44336;
`;

const mapStateToProps = (state: IRootState) => state;

interface IMapActionsToProps {
  setLibraries: (language: ILibrary[]) => any;
}

type Props = IRootState & IMapActionsToProps;

function NewCardPanel(props: Props) {
  const classes = useStyles();

  const [error, setError] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleSetName = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setName(value);
    if (props.libraries.some(lang => lang.name.toLowerCase() === value.toLowerCase())) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const addLibraryHandler = () => {
    if (error)
      return;

    let newLibraries = [...props.libraries];
    const id = newLibraries.length > 0 ? newLibraries[newLibraries.length - 1].id + 1 : 0;
    newLibraries.push({
      id: id,
      name: name
    });
    props.setLibraries(newLibraries);
    axios.post('/libraries.json', newLibraries).then().catch(err => {
      throw err;
    });
  }

  const Add = (
    <StyledButton
      variant="contained"
      color="primary"
      size="large"
      onClick={addLibraryHandler}
      disabled={error}
    >
      Add
    </StyledButton>
  );

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={8} md={4}>
        <MuiCard variant={"outlined"}>
          <CardContent>
            <CardHeader
              className={classes.header}
              title="Add a new Library"
            />
            <hr style={{
              border: "none",
              borderTop: "1px solid #e8e8e8"
            }}/>
            <br/>

            <FormControl className={classes.input}>
              <TextField
                id="outlined-multiline-static"
                label="New Library"
                placeholder="Enter name of a new library..."
                variant="outlined"
                onChange={handleSetName}
                error={error}
              />
            </FormControl>
            <br/>

            {error && <Small>This library name exists.</Small>}

            <CardActions className={classes.actions}>
              {Add}
            </CardActions>
          </CardContent>
        </MuiCard>
      </Grid>
    </Grid>
  )
}

const mapActionsToProps = (dispatch: any) => ({
  setLibraries: (libraries: ILibrary[]) => dispatch({type: Constants.SET_LIBRARIES, payload: libraries}),
})

export default connect(mapStateToProps, mapActionsToProps)(NewCardPanel);
