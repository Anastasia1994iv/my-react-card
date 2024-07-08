import styled, { css } from "styled-components";

type ButtonPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "outlined";
  fontColor?: string;
};

export const StyledButton = styled.button<ButtonPropsType>`
  border: none;
  width: 86px;
  height: 30px;
  margin-right: 12px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;

  ${props =>
    props.btnType === "primary" &&
    css<ButtonPropsType>`
      color: ${props => props.fontColor || "#grey"};
      background-color: ${props.color || "gold"};

      &:hover {
        background-color: #ffffff;
        color: #4e71fe;
        border: 2px solid #4e71fe;
      }
    `}

  ${props =>
    props.btnType === "outlined" &&
    css<ButtonPropsType>`
      color: ${props => props.fontColor || "#grey"};
      background-color: ${props.color || "transparent"};
      border: 2px solid ${props.fontColor || "gold"};

      &:hover {
        color: #ffffff;
        background-color: #4e71fe;
      }
    `}
`;
