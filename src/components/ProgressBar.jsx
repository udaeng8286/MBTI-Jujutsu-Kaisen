import styled from "styled-components";

const ProgressBar = ({ currentIndex, totalQuestions }) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  return (
    <OuterProgressBar>
      <InnerProgressBar progress={progress} />
    </OuterProgressBar>
  );
};
export default ProgressBar;

const OuterProgressBar = styled.div`
  width: 90%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -30px);
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 2px;
  height: 35px;
  overflow: hidden;
`;

const InnerProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  border-radius: 5px;
  background: #fff;
  height: 100%;
  transition: width 0.5s linear;
`;
