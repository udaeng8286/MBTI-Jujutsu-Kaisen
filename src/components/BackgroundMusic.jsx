import { useState, useRef } from "react";
import styled from "styled-components";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(`/bgm.mp3`));

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Button onClick={toggleMusic}>
      {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
    </Button>
  );
};

export default BackgroundMusic;

const Button = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
  font-size: 24px;
  color: #2f3648;
  cursor: pointer;
  transition: background-color 0.3s, color 0.2s;
  &:hover {
    color: #d2d2d2;
  }
`;
