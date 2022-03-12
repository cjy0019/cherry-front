import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'RobotoBold';
    src: url(${require('../assets/fonts/Roboto-Bold.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 700;
  }
  @font-face {
    font-family: 'RobotoMedium';
    src: url(${require('../assets/fonts/Roboto-Medium.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 500;
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${require('../assets/fonts/Roboto-Regular.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 400;
  }
  @font-face {
    font-family: 'RobotoLight';
    src: url(${require('../assets/fonts/Roboto-Light.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 300;
  }
  @font-face {
    font-family: 'RobotoThin';
    src: url(${require('../assets/fonts/Roboto-Thin.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
    font-weight: 100;
  }

  // TODO : pretendard 폰트 빌드시에 성능이슈 발생
  // TODO : 로보토만 빌드할 때는 문제 없음.
  /* @font-face {
    font-family: 'PretendardBold';
    src: url(${require('../assets/fonts/Pretendard-Bold.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 700;
  }
  @font-face {
    font-family: 'PretendardMedium';
    src: url(${require('../assets/fonts/Pretendard-Medium.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 500;
  }
  @font-face {
    font-family: 'PretendardRegular';
    src: url(${require('../assets/fonts/Pretendard-Regular.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 400;
  }
  @font-face {
    font-family: 'PretendardLight';
    src: url(${require('../assets/fonts/Pretendard-Light.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 300;
  }
  @font-face {
    font-family: 'PretendardThin';
    src: url(${require('../assets/fonts/Pretendard-Thin.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
    font-weight: 100;
  } */

  body {
    font-family: 'RobotoBold';
    font-size: 100px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
