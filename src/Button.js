import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.btnClr};
  border: 4px solid white;
  border-radius: 4px;
  cursor: pointer;
  padding: 15px;
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
`;

export const Button = ({ children, btnColor, ...props }) => {
  console.log(props, "ss");
  return (
    <StyledButton onClick={props.btnClick} {...props}>
      {children}
    </StyledButton>
  );
};

export const DangerButton = ({ children, ...props }) => {
  return (
    <Button btnClr="red" {...props}>
      {children}
    </Button>
  );
};

export const SuccessButton = ({ children, ...props }) => {
  return (
    <Button btnClr="green" {...props}>
      {children}
    </Button>
  );
};
