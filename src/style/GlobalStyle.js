import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: RobotoBold;
    src: url('../assets/fonts/Roboto/Roboto-Bold.woff') format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 700;
  }
  @font-face {
    font-family: RobotoMedium;
    src: url('../assets/fonts/Roboto/Roboto-Medium.woff') format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 500;
  }
  @font-face {
    font-family: RobotoRegular;
    src: url('../assets/fonts/Roboto/Roboto-Regular.woff') format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 400;
  }
  @font-face {
    font-family: RobotoLight;
    src: url('../assets/fonts/Roboto/Roboto-Light.woff') format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 300;
  }
  @font-face {
    font-family: RobotoThin;
    src: url('../assets/fonts/Roboto/Roboto-Thin.woff') format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 100;
  }

  @font-face {
    font-family: PretendardBold;
    src: url('../assets/fonts/Pretendard/Pretendard-Bold.woff') format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 700;
  }
  @font-face {
    font-family: PretendardMedium;
    src: url('../assets/fonts/Pretendard/Pretendard-Medium.woff') format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 500;
  }
  @font-face {
    font-family: PretendardRegular;
    src: url('../assets/fonts/Pretendard/Pretendard-Regular.woff')
      format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 400;
  }
  @font-face {
    font-family: PretendardLight;
    src: url('../assets/fonts/Pretendard/Pretendard-Light.woff') format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 300;
  }
  @font-face {
    font-family: PretendardThin;
    src: url('../assets/fonts/Pretendard/Pretendard-Thin.woff') format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 100;
  }

  body {
    font-family: RobotoLight;
    font-size: 300px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
