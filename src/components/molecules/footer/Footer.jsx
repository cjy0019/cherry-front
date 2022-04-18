import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const Footer = ({ login }) => {
  return (
    <StyledFooter login={login}>
      <ContentsContainer>
        <FlexLeft>
          <BadgeWrapper>
            <CherryPickText>Cherry Pick</CherryPickText>
            <BetaBadge>BETA</BetaBadge>
          </BadgeWrapper>
          <StyledSmall>&#9426; 2022 Cherry Pick</StyledSmall>
        </FlexLeft>

        <FlexRight>
          <StyledP>email</StyledP>
          <EmailBadge>CherryPick@gmail.com</EmailBadge>
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

  @media ${responsive.mobile} {
    padding: 9px 0;
  }

  ${(props) =>
    props.login &&
    css`
      @media ${responsive.mobile} {
        display: none;
      }
    `}
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
    gap: 13px;
    padding: 32px 0 35px;
  }

  @media ${responsive.mobile} {
    flex-direction: column-reverse;
    width: 100%;
    gap: 13px;
    padding: 32px 0 35px;
  }
`;

const FlexLeft = styled.div`
  display: flex;
  align-items: center;

  @media ${responsive.mobile} {
    padding-right: 53px;

    & > div:nth-of-type(1)::after {
      content: '';
      display: inline-block;
      vertical-align: 30%;
      width: 10px;
      opacity: 0.2;
    }
  }
`;

const FlexRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${responsive.mobile} {
    gap: 2px;

    & > div:nth-of-type(1)::after {
      content: '';
      display: inline-block;
      vertical-align: 30%;
      width: 10px;
      opacity: 0.2;
      border: 1px solid #ffffff;
      transform: rotate(90deg);
    }
  }
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
  margin-right: 4px;

  @media ${responsive.mobile} {
    font-size: 10px;
    margin-right: 2px;
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

export default Footer;
