import React from 'react';
import styled from 'styled-components';
import "./Flex.css";

const Flex = styled.div`
	display: flex;
	align-content: center;
	width: 100%;
	
	@media only screen and (max-width: 768px) {

		> div {
			width: 100%;
		}
	}
	
`;

type FlexProps = {
  children: any;
  direction: "initial" | "inherit" | "row" | "row-reversed" | "col" | "col-reversed";
  align?: "center" | "stretch" | "baseline" | "start" | "end";
  justify?: "center" | "between" | "around" | "start" | "end";
  content?: "center" | "between" | "around" | "start" | "end";
  m?: 1 | 2 | 3 | 4 | 5;
  gap?: number;
}

const flex = (props: FlexProps) => {
  const classes = [];
  classes.push(props.direction);
  classes.push("align-" + props.align);
  classes.push("justify-" + props.justify);
  classes.push("m-" + props.m);
  classes.push("content-" + props.content);

  return (
    <Flex
      className={classes.join(" ")}
      style={{gap: props.gap + "rem"}}
    >
      {props.children}
    </Flex>
  );
}

export default flex;
