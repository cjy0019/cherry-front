import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${require('../assets/fonts/Roboto-Bold.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${require('../assets/fonts/Roboto-Medium.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${require('../assets/fonts/Roboto-Regular.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${require('../assets/fonts/Roboto-Light.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${require('../assets/fonts/Roboto-Thin.woff').default})
      format('woff');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${require('../assets/fonts/Pretendard-Bold.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${require('../assets/fonts/Pretendard-SemiBold.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${require('../assets/fonts/Pretendard-Medium.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${require('../assets/fonts/Pretendard-Regular.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${require('../assets/fonts/Pretendard-Light.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${require('../assets/fonts/Pretendard-Thin.woff').default})
      format('woff');
    unicode-range: U+AC00-D7A3;
  }

  body {
    font-family: 'Pretendard', 'Roboto';
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
