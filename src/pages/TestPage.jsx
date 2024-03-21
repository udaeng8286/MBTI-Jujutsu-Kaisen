import styled from "styled-components";
import background from "../../public/images/asset/test_bg.png";
import questionData from "../data/question.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

const TestPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typeResult, setTypeResult] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  const calculateType = () => {
    const type =
      (typeResult.E > typeResult.I ? "E" : "I") +
      (typeResult.N > typeResult.S ? "N" : "S") +
      (typeResult.T > typeResult.F ? "T" : "F") +
      (typeResult.J > typeResult.P ? "J" : "P");
    return type;
  };

  const handleOptionSelect = (type) => {
    setTypeResult((prevResult) => ({
      ...prevResult,
      [type]: prevResult[type] + 1,
    }));

    if (currentIndex < questionData.length - 1) {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex;
      });
    } else {
      const mbtiType = calculateType();
      navigate(`/result?mbtiType=${encodeURIComponent(mbtiType)}`);
    }
  };

  return (
    <Container>
      <TestContainer>
        <ProgressBar
          currentIndex={currentIndex}
          totalQuestions={questionData.length}
        />
        <QuestionWrapper>
          <Question>{questionData[currentIndex].question}</Question>
        </QuestionWrapper>
        <AnswerWrap>
          {Object.entries(questionData[currentIndex].answers).map(
            ([key, value]) => (
              <Answer key={key} onClick={() => handleOptionSelect(key)}>
                {value}
              </Answer>
            )
          )}
        </AnswerWrap>
      </TestContainer>
    </Container>
  );
};
export default TestPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const TestContainer = styled.div`
  width: 90%;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  background-color: #2f3648;
  padding: 2rem 1rem;
  border-radius: 10px;
  white-space: pre-line;
  @media (max-width: 300px) {
    padding: 1rem 1rem;
    margin-top: 25%;
  }
`;

const Question = styled.p`
  color: white;
  font-size: 22px;
  @media (max-width: 300px) {
    font-size: 20px;
  }
`;

const AnswerWrap = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Answer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  background-color: white;
  color: #2f3648;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.2s;

  &:hover {
    background-color: #cdcdd5;
  }

  @media (max-width: 300px) {
    font-size: 18px;
  }
`;
