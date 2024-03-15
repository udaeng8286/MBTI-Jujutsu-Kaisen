import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../../public/images/asset/start_bg.png";
import logo from "../../public/images/asset/logo.png";

const StartPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test");
  };

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <SubTitle>나랑 닮은 주술회전 캐릭터는?</SubTitle>
      <Button onClick={handleClick}>START</Button>
    </Container>
  );
};
export default StartPage;

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

const Logo = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    margin-top: -20px;
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-top: -1rem;
  }
`;

const Button = styled.div`
  background-color: #2f3648;
  color: white;
  padding: 0.5rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #cbcbcb;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
