import { styled } from "styled-components";

type PageContentPropsType = {
  value: string;
};

const PageContentStyled = styled.p`
  width: 260px;
  height: 40px;
  margin: 20px 0px 0px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #abb3ba;
`;

export function PageContent(props: PageContentPropsType) {
  console.log("render p");
  return <PageContentStyled>{props.value}</PageContentStyled>;
}
//ошибки нет