import React from 'react';
import styled from 'styled-components';
import palette from '../../../../style/palette';

const TeacherBadge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
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

export default TeacherBadge;
