import styled from "styled-components";
import kakaoIcon from "../../public/images/asset/kakao.png";
import twitterIcon from "../../public/images/asset/twitter.png";
import linkIcon from "../../public/images/asset/link.png";

const ShareButton = () => {
  const handleCopyLink = () => {
    const linkToCopy = window.location.href;
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        console.log("링크가 복사되었습니다.");
      })
      .catch((error) => {
        console.error("링크 복사에 실패했습니다:", error);
      });
  };

  return (
    <Container>
      <Button>
        <img src={twitterIcon} alt="Twitter Share" />
      </Button>
      <Button>
        <img src={kakaoIcon} alt="Kakao Share" />
      </Button>
      <Button onClick={handleCopyLink}>
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
