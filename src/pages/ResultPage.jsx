import styled from "styled-components";
import ShareButton from "../components/ShareButton";
import background from "../../public/images/asset/result_bg.png";

const ResultPage = () => {
  return <Container></Container>;
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
