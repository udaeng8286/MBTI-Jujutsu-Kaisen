import styled from "styled-components";
import background from "../../public/images/asset/test_bg.png";
// import questionData from "../data/question.json";

const TestPage = () => {
  return (
    <Container>
      <QuestionContainer></QuestionContainer>
      <AnswerContainer>
        <Answer1></Answer1>
        <Answer2></Answer2>
      </AnswerContainer>
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

const QuestionContainer = styled.div`
  width: 400px; //임시. 수정 필요
  height: 240px; //임시. 수정 필요
  border-radius: 10px;
  background-color: #2f3648;
`;

const AnswerContainer = styled.div`
  margin-top: 2rem; //임시. 수정 필요
  width: 400px; //임시. 수정 필요
`;

const Answer1 = styled.div`
  width: 100%; //임시. 수정 필요
  height: 120px; //임시. 수정 필요
  border-radius: 10px;
  background-color: #ffffff;
`;

const Answer2 = styled.div`
  margin-top: 2rem; //임시. 수정 필요
  width: 100%; //임시. 수정 필요
  height: 120px; //임시. 수정 필요
  border-radius: 10px;
  background-color: #ffffff;
`;
