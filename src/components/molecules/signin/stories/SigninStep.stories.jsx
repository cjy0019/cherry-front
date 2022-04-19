import SigninStep from '../SigninStep';

export default {
  title: 'molecules/회원가입/회원가입 단계',
  component: SigninStep,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '30%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <SigninStep {...args} />;

export const SigninStepStory = Template.bind({});

SigninStepStory.args = {
  step: 'first',
};

SigninStepStory.storyName = '회원가입 단계';
