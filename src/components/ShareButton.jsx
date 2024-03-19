import styled from "styled-components";
import kakaoIcon from "../../public/images/asset/kakao.png";
import twitterIcon from "../../public/images/asset/twitter.png";
import linkIcon from "../../public/images/asset/link.png";
import { useEffect } from "react";
const ShareButton = () => {
  const currentUrl = window.location.href;

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(
      "나와 닮은 성격 유형의 주술회전 캐릭터 테스트 결과를 확인해보세요!"
    )}`;
    window.open(shareUrl, "_blank");
  };

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
    }
  }, []);

  const handleKakaoShare = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "내가 주술회전 캐릭터라면?",
        description: "나와 비슷한 성격 유형의 주술회전 캐릭터를 알아봐요!!",
        imageUrl: window.location.origin,
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: "결과 보러가기",
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      ],
    });
  };

  const handkeLinkShare = () => {
    const shareData = {
      title: "결과 공유",
      text: "나와 닮은 성격 유형의 주술회전 캐릭터 테스트 결과를 확인해보세요!",
      url: currentUrl,
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
      <Button onClick={handleTwitterShare}>
        <Icon src={twitterIcon} alt="Twitter Share" />
      </Button>
      <Button onClick={handleKakaoShare}>
        <Icon src={kakaoIcon} alt="Kakao Share" />
      </Button>
      <Button onClick={handkeLinkShare}>
        <Icon src={linkIcon} alt="Copy Link" />
      </Button>
    </Container>
  );
};
export default ShareButton;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Button = styled.button`
  width: 76px;
  height: 76px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
`;
