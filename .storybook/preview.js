// .storybook/preview.js

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

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
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
