// .storybook/preview.js

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';

const customViewports = {
  cherryPickMobile: {
    name: 'cherrypick mobile',
    styles: {
      width: '360px',
      height: '844px',
    },
  },
  cherryPickTablet: {
    name: 'cherrypick tablet',
    styles: {
      width: '768px',
      height: '1118px',
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
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
