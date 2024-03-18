import styled from "styled-components";
import kakaoIcon from "../../public/images/asset/kakao.png";
import twitterIcon from "../../public/images/asset/twitter.png";
import linkIcon from "../../public/images/asset/link.png";

const ShareButton = () => {
  const handleCopyLink = () => {
    const shareData = {
      title: "결과 공유",
      text: "나와 닮은 성격 유형의 주술회전 캐릭터 테스트 결과를 확인해보세요!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("공유 성공"))
        .catch((error) => console.error("공유 실패:", error));
    } else {
      console.log("Share API를 지원하지 않는 브라우저입니다.");
    }
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
  /* background: none; */
  border: none;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;
