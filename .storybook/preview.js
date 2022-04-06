// .storybook/preview.js
import '@storybook/addon-console';

const customViewports = {
  cherrypickPC: {
    name: 'cherrypick PC',
    styles: {
      width: '1920px',
      height: '4174px',
    },
  },
  cherryPickTablet: {
    name: 'cherrypick tablet',
    styles: {
      width: '768px',
      height: '1118px',
    },
  },
  cherryPickMobile: {
    name: 'cherrypick mobile',
    styles: {
      width: '360px',
      height: '844px',
    },
  },
  iPhone5: {
    name: 'IPhone5',
    styles: {
      width: '320px',
      height: '640px',
    },
  },
  iPhone12Pro: {
    name: 'IPhone12 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  iPhoneSE: {
    name: 'IPhone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPadAir: {
    name: 'IPad Air',
    styles: {
      width: '820px',
      height: '1180px',
    },
  },
  iPadMini: {
    name: 'IPad Mini',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical', // <--- 추가된 코드
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
