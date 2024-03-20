import styled from "styled-components";
import background from "../../public/images/asset/test_bg.png";
import questionData from "../data/question.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // 선택된 답변들로 최종 유형 계산 함수
  const calculateType = () => {
    const type =
      (typeResult.E > typeResult.I ? "E" : "I") +
      (typeResult.N > typeResult.S ? "N" : "S") +
      (typeResult.T > typeResult.F ? "T" : "F") +
      (typeResult.J > typeResult.P ? "J" : "P");
    console.log("Calculated MBTI Type:", type);
    return type;
  };

  // 사용자가 답변 선택할 때 호출되는 함수
  const handleOptionSelect = (type) => {
    // 선택된 답변에 따라 결과 업데이트
    setTypeResult((prevResult) => ({
      ...prevResult,
      [type]: prevResult[type] + 1,
    }));

    // 다음 질문으로 이동 또는 결과 페이지로 이동
    if (currentIndex < questionData.length - 1) {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        console.log("다음 인덱스 ", nextIndex);
        console.log("남은 질문수 ", questionData.length - nextIndex);
        return nextIndex;
      });
    } else {
      const mbtiType = calculateType();
      console.log("끝", mbtiType);
      navigate(`/result?mbtiType=${encodeURIComponent(mbtiType)}`);
    }
  };
  console.log("결과", typeResult);

  return (
    <Container>
      <TestContainer>
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
`;

const Question = styled.p`
  color: white;
  font-size: 22px;
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
`;
