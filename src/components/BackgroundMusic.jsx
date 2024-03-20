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
    <Container>
      <Button onClick={toggleMusic}>
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </Button>
    </Container>
  );
};

export default BackgroundMusic;

const Container = styled.div``;

const Button = styled.div``;
