import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const TeacherBadge = ({ children }) => {
  const [type, ...teacherName] = children.split(' ');
  return (
    <StyledBadge>
      <Regular>{type}</Regular>
      <Bold>{teacherName.join(' ')}</Bold>
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  display: inline-block;
  padding: 7px 4px 6px;
  background: #000000;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  color: ${palette.textWhite};
`;

const Regular = styled.span`
  font-weight: 400;
`;

const Bold = styled.span`
  font-weight: 700;
  margin-left: 5px;
`;

export default TeacherBadge;
