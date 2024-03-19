import { useState, useEffect } from "react";
import styled from "styled-components";
import ShareButton from "../components/ShareButton";
import background from "../../public/images/asset/result_bg.png";
import characterData from "../data/results.json";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const ResultPage = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const mbtiType = new URLSearchParams(location.search).get("mbtiType");

  const characterInfo = characterData.find(
    (character) => character.type === mbtiType
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleReplay = () => {
    navigate("/");
  };

  return (
    <Container>
      {loading ? (
        <LoadingPage />
      ) : (
        <ResultContainer>
          <CharacterImg src={characterInfo.characterImg} />
          <InfoContainer>
            <Character>{characterInfo.character}</Character>
            <Info>{characterInfo.description}</Info>
          </InfoContainer>
          <BottomSection>
            <ShareButton />
            <ReplayButton onClick={handleReplay}>다시하기</ReplayButton>
          </BottomSection>
        </ResultContainer>
      )}
    </Container>
  );
};
export default ResultPage;

const Container = styled.div``;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const CharacterImg = styled.img`
  width: 280px;
  margin-bottom: 1.5rem;
`;

const InfoContainer = styled.div`
  background-color: white;
  width: 90%;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.5rem;
  font-weight: bold;
`;

const Character = styled.div`
  font-size: 24px;
`;

const Info = styled.div`
  margin-top: 1rem;
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
