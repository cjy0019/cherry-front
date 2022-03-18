import AgencyResponsiveBadge from './AgencyResponsiveBadge';
import NumberBadge from './NumberBadge';
import SatisfactionBadge from './SatisfactionBadge';
import TeacherBadge from './TeacherBadge';
import UserLoginStateBadge from './UserLoginStateBadge';

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

export const Teacher = () => <TeacherBadge>강사 John Smilga</TeacherBadge>;
Teacher.storyName = '강사 이름 뱃지';

export const AgencyResponsive = () => (
  <AgencyResponsiveBadge>기관 groomedu</AgencyResponsiveBadge>
);
AgencyResponsive.storyName = '기관 이름 반응형 뱃지';
