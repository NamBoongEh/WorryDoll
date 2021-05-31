import svg1 from '../../img/svg1.svg';
import svg2 from '../../img/svg2.svg';
import svg3 from '../../img/svg3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Anonymous',
  headline: '익명 보장',
  description: '개인 정보 없는 회원가입, 익명의 게시판',
  buttonLabel: 'Get started',
  imgStart: false,
  img: svg1,
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Easy',
  headline: '쉽고 간편하게',
  description: '아이디와 비밀번호만 설정하면 끝',
  buttonLabel: 'Get started',
  imgStart: false,
  img: svg2,
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'DO IT NOW!',
  headline: '지금 바로 시작해보세요',
  description: '작은 걱정부터 큰 걱정까지 모두 걱정인형이 가져갈게요',
  buttonLabel: 'Get started',
  imgStart: false,
  img: svg3,
  dark: true,
  primary: true,
  darkText: false,
};
