import Footer from './Footer';

export default {
  title: 'molecules/푸터',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: '150px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FooterStory = () => <Footer />;

FooterStory.storyName = '푸터';
