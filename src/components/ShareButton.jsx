import styled from "styled-components";
import kakaoIcon from "../../public/images/asset/kakao.png";
import twitterIcon from "../../public/images/asset/twitter.png";
import linkIcon from "../../public/images/asset/link.png";

const ShareButton = () => {
  return (
    <Container>
      <Button>
        <img src={twitterIcon} alt="Twitter Share" />
      </Button>
      <Button>
        <img src={kakaoIcon} alt="Kakao Share" />
      </Button>
      <Button>
        <img src={linkIcon} alt="Copy Link" />
      </Button>
    </Container>
  );
};
export default ShareButton;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  max-width: 100px;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
