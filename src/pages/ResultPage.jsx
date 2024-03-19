import styled from "styled-components";
import ShareButton from "../components/ShareButton";
import background from "../../public/images/asset/result_bg.png";

const ResultPage = () => {
  return (
    <Container>
      <CharacterImg></CharacterImg>
      <InfoContainer></InfoContainer>
      <BottomSection>
        <ShareButton />
        <ReplayButton>다시하기</ReplayButton>
      </BottomSection>
    </Container>
  );
};
export default ResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center end;
  @media (max-width: 768px) {
    background-position: center;
  }
`;

const CharacterImg = styled.div``;

const InfoContainer = styled.div`
  background-color: white;
  width: 90%;
  height: 240px;
  border-radius: 10px;
`;

const BottomSection = styled.div`
  margin-top: 1rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReplayButton = styled.button`
  width: 140px;
  height: 80px;
  border-radius: 10px;
  margin-left: 1rem;
  cursor: pointer;
  font-family: "Song Myung", serif;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.2s;
  border: none;
  &:hover {
    background-color: #2f3648;
    color: #fff;
  }
`;
