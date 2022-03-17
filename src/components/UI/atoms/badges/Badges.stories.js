import NumberBadge from './NumberBadge';

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
