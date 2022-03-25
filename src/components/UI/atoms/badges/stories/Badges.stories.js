import NumberBadge from '../NumberBadge';
import SatisfactionBadge from '../SatisfactionBadge';
import UserLoginStateBadge from '../UserLoginStateBadge';

export default {
  title: 'atoms/뱃지',
};

export const Number = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <NumberBadge>1</NumberBadge>
    <NumberBadge>2</NumberBadge>
    <NumberBadge>3</NumberBadge>
    <NumberBadge>4</NumberBadge>
    <NumberBadge>5</NumberBadge>
  </div>
);
Number.storyName = '숫자 뱃지';

export const SatisfactionBadgeStory = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <SatisfactionBadge>추천해요!</SatisfactionBadge>
    <SatisfactionBadge>매우 만족</SatisfactionBadge>
    <SatisfactionBadge>만족</SatisfactionBadge>
    <SatisfactionBadge>보통</SatisfactionBadge>
    <SatisfactionBadge>그저 그럼</SatisfactionBadge>
  </div>
);
SatisfactionBadgeStory.storyName = '만족도 뱃지';

export const UserLoginState = () => (
  <UserLoginStateBadge>카카오 로그인</UserLoginStateBadge>
);
UserLoginState.storyName = '로그인 상태 뱃지';
