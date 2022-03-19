import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <LeftWrapper>
          <CherryPickText>Cherry Pick</CherryPickText>
          <BetaBadge>BETA</BetaBadge>
          <StyledSmall>&#9426; 2022 Cherry Pick</StyledSmall>
        </LeftWrapper>
        <div>
          <p>email</p>
          <div>CherryPick@gmail.com</div>
          <p>github</p>
          <div>github.com/cherrypick-project</div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${palette.footerBlack};
  color: white;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CherryPickText = styled.p`
  color: ${palette.pointRed};
  font-size: 16px;
  font-weight: 400;
`;

const BetaBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 22px;
  background: #1e1d1d;
  border-radius: 100px;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  margin-left: 8px;
  color: ${palette.textWhite};
`;

const StyledSmall = styled.small`
  font-weight: 400;
  font-size: 12px;
  color: ${palette.text5};
  margin-left: 12px;
`;

export default Footer;
