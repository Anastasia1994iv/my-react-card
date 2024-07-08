import { styled } from 'styled-components';

type PageTitlePropsType = {
  title: string;
};

const PageTitleStyled = styled.h1`
width: 70px;
height: 19px;
margin: 20px 0px 0px 20px;
top: 200px;
left: 20px;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
color: #000000;

`

export function PageTitle(props: PageTitlePropsType) {
  console.log("render PageTitle");
  return <PageTitleStyled>{props.title}</PageTitleStyled>;
}