import styled from "styled-components";
import background from "../../public/images/asset/loading_bg.png";
import LoadingBar from "../components/LoadingBar";

const LoadingPage = () => {
  return (
    <Container>
      <Text>분석중!</Text>
      <LoadingBar />
    </Container>
  );
};
export default LoadingPage;

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

const Text = styled.div`
  margin-top: 10rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-top: -1rem;
  }
  font-size: 28px;
`;
