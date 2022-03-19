import Footer from './Footer';

export default {
  title: 'molecules/푸터',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FooterStory = () => (
  <div style={{ color: 'white' }}>
    <h2>우측 상단에 풀스크린 누르고 확인</h2>
    <Footer />
  </div>
);

FooterStory.storyName = '푸터';
