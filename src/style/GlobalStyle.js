import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import RobotoBold from '../assets/fonts/Roboto-Bold.woff';
import RobotoMedium from '../assets/fonts/Roboto-Medium.woff';
import RobotoRegular from '../assets/fonts/Roboto-Regular.woff';
import RobotoLight from '../assets/fonts/Roboto-Light.woff';
import RobotoThin from '../assets/fonts/Roboto-Thin.woff';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff';
import PretendardSemiBold from '../assets/fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff';
import PretendardLight from '../assets/fonts/Roboto-Light.woff';
import PretendardThin from '../assets/fonts/Pretendard-Thin.woff';
import palette from './palette';

const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold}) format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 600;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardLight}) format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 300;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThin}) format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 100;
  }

  body {
    font-family: 'Pretendard', 'Roboto';
    background-color: ${palette.backgroundBlack};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
