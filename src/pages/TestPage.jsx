import styled from "styled-components";
import background from "../../public/images/asset/test_bg.png";

const TestPage = () => {
  return <Container>testpage</Container>;
};
export default TestPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
