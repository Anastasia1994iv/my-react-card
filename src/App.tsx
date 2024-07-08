import { styled } from "styled-components";
import "./App.css";
import { PageContent } from "./components/PageContent";
import { PageTitle } from "./components/PageTitle";
import { StyledButton } from "./components/StyledButton";
import { ImageComponent } from "./components/img.component/ImageComponent";
import imgLogo from "./components/logo/imgLogo.png";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div>
      <Box>
        <Card>
          <ImageComponent src={imgLogo} alt={"Logo"}></ImageComponent>
          <PageTitle title={"Headline"}></PageTitle>
          <PageContent
            value={
              "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
            }
          ></PageContent>
          <BtnContainer>
            <StyledButton
              btnType={"primary"}
              color={myTheme.colors.primary}
              fontColor={myTheme.fontColors.primary}
            >
              See more
            </StyledButton>
            <StyledButton
              btnType={"outlined"}
              color={myTheme.colors.secondary}
              fontColor={myTheme.fontColors.secondary}
            >
              Save
            </StyledButton>
          </BtnContainer>
        </Card>
      </Box>
    
    </div>
  );
}

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 19px 0px 0px 20px;
`;
const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px 5px #0000001a;

  button {
    cursor: pointer;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;

export default App;
