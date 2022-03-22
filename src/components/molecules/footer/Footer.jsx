import React from 'react';
import styled, { css } from 'styled-components';
import { useCalculateViewPort } from '../../../hooks/useCalculateViewPort';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const Footer = () => {
  const { viewPort } = useCalculateViewPort();
  return (
    <StyledFooter>
      <ContentsContainer>
        <FlexLeft>
          <BadgeWrapper>
            <CherryPickText>Cherry Pick</CherryPickText>
            <BetaBadge>BETA</BetaBadge>
          </BadgeWrapper>
          {viewPort <= 430 && <Line hide />}
          <StyledSmall>&#9426; 2022 Cherry Pick</StyledSmall>
        </FlexLeft>

        <FlexRight>
          <StyledP>email</StyledP>
          <EmailBadge>CherryPick@gmail.com</EmailBadge>
          {viewPort <= 430 && <Line />}
          <StyledP>github</StyledP>
          <EmailBadge>github.com/cherrypick-project</EmailBadge>
        </FlexRight>
      </ContentsContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${palette.footerBlack};
  color: white;
  padding: 12px 0;

  @media (min-width: 361px) and (max-width: 737px) {
    padding: 9px 0;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 1100px;
  box-sizing: border-box;
  padding: 0 15px 0;

  @media (min-width: 361px) and (max-width: 737px) {
    width: 100%;
    padding-right: 3px;
    justify-content: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    gap: 0;
  }

  @media ${responsive.mobile} {
    flex-direction: column-reverse;
    gap: 0;
    padding: 0;
    width: 100%;
  }
`;

const FlexLeft = styled.div`
  display: flex;
  align-items: center;

  @media ${responsive.mobile} {
    padding-right: 53px;
  }
`;

const FlexRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media ${responsive.mobile} {
    gap: 4px;
  }
`;

const CherryPickText = styled.p`
  color: ${palette.pointRed};
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;

  @media ${responsive.mobile} {
    font-size: 12px;
  }
`;

const BetaBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 22px;
  background: #1e1d1d;
  border-radius: 100px;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  color: ${palette.textWhite};
  padding-top: 2px;

  @media ${responsive.mobile} {
    width: 40px;
    height: 18px;
  }
`;

const StyledSmall = styled.small`
  font-weight: 400;
  font-size: 12px;
  color: ${palette.text5};
  white-space: nowrap;
  margin-left: 12px;

  @media ${responsive.mobile} {
    font-size: 10px;
    margin: 0;
  }
`;

const StyledP = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${palette.text5};

  @media ${responsive.mobile} {
    margin-right: 4px;
    font-size: 10px;
  }
`;

const EmailBadge = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  color: ${palette.textWhite};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  white-space: nowrap;
  @media (min-width: 361px) and (max-width: 737px) {
    padding: 0;
    border: none;
  }

  @media ${responsive.mobile} {
    font-size: 10px;
    border: none;
    padding: 0;
  }
`;

const Line = styled.div`
  width: 10px;
  height: 0px;
  opacity: 0.2;
  border: 1px solid #ffffff;
  transform: rotate(90deg);
  margin: 0 8px 0 2px;

  ${(props) =>
    props.hide &&
    css`
      border-color: transparent;
    `}
`;

export default React.memo(Footer);
