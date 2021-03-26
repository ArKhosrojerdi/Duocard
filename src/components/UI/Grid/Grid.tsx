import React from 'react';
import styled from 'styled-components';
import "./Grid.css";

const Grid = styled.div`
	display: flex;
	justify-content: center;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	width: 100%;

	> div {
		max-width: 20rem
	}

	@media only screen and (max-width: 768px) {
		grid-row-gap: 1rem;
		grid-template-columns: 1fr;
	}
`;

type GridProps = {
  children: any;
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const grid = (props: GridProps) => {
  const classes = [];
  classes.push("col-" + props.col);

  return (
    <Grid className={classes.join(' ')}>{props.children}</Grid>
  );
}

export default grid;
