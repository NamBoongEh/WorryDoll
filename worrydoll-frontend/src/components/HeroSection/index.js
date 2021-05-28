import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../common/ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroElements = () => {
  //버튼 마우스 호버 시 화살표 모양 변화
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>언제 어디서든 걱정과 불안을 털어놓으세요</HeroH1>
        <HeroP>
          복잡한 회원가입은 그만
          <br />
          개인정보가 필요없는 익명의 비밀 일기장
          <br />
          걱정인형 프로젝트
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroElements;
