import React from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';

const Footer = () => {
  return (
    <StyledFooter>
      <ContentsContainer>
        <FlexWrapper>
          <CherryPickText>Cherry Pick</CherryPickText>
          <BetaBadge>BETA</BetaBadge>
          <StyledSmall>&#9426; 2022 Cherry Pick</StyledSmall>
        </FlexWrapper>
        <FlexWrapper>
          <StyledP>email</StyledP>
          <EmailBadge>CherryPick@gmail.com</EmailBadge>
          <StyledP>github</StyledP>
          <EmailBadge>github.com/cherrypick-project</EmailBadge>
        </FlexWrapper>
      </ContentsContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${palette.footerBlack};
  color: white;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:nth-of-type(2) {
    gap: 8px;
  }
`;

const FlexWrapper = styled.div`
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

const StyledP = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${palette.text5};
`;

const EmailBadge = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  color: ${palette.textWhite};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`;

export default Footer;
