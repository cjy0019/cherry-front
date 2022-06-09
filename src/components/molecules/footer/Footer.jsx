import React from 'react';
import styled, { css } from 'styled-components';

import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const Footer = ({ login, className }) => {
  return (
    <StyledFooter login={login} className={className}>
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
  align-items: center;

  color: ${palette.textWhite};
  background-color: ${palette.footerBlack};

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
  gap: 5px;

  width: 1100px;

  padding: 14px 10px;

  @media (max-width: 737px) {
    width: 100%;
    justify-content: center;
    flex-direction: column-reverse;

    padding: 32px 0 35px;

    gap: 13px;
  }

  @media (max-width: 315px) {
    padding: 15px 0 15px;
  }
`;

const FlexLeft = styled.div`
  display: flex;
  align-items: center;

  @media ${responsive.mobile} {
    justify-content: center;

    & > div:nth-of-type(1)::after {
      content: '';
      display: inline-block;
      vertical-align: 30%;
      width: 10px;

      opacity: 0.2;
    }
  }

  @media (max-width: 215px) {
    flex-direction: column;
    gap: 10px;
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

  @media (max-width: 315px) {
    flex-direction: column;
    gap: 4px;

    & > div:nth-of-type(1)::after {
      content: '';
      display: none;
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
  font-weight: 400;
  font-size: 1rem;
  color: ${palette.pointRed};

  white-space: nowrap;

  @media ${responsive.mobile} {
    font-size: 0.75rem;
  }
`;

const BetaBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 22px;

  font-weight: 700;
  font-size: 0.625rem;
  color: ${palette.textWhite};
  text-align: center;

  background-color: #1e1d1d;
  border-radius: 100px;

  padding-top: 2px;

  @media ${responsive.mobile} {
    width: 40px;
    height: 18px;
  }
`;

const StyledSmall = styled.small`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.text5};

  white-space: nowrap;

  margin-left: 12px;

  @media ${responsive.mobile} {
    font-size: 0.625rem;
    margin: 0;
  }
`;

const StyledP = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: ${palette.text5};

  margin-right: 4px;

  @media ${responsive.mobile} {
    font-size: 0.625rem;
    margin-right: 2px;
  }
`;

const EmailBadge = styled.div`
  display: inline-block;

  font-weight: 500;
  font-size: 0.75rem;
  color: ${palette.textWhite};

  background-color: transparent;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;

  padding: 10px 20px;

  white-space: nowrap;

  @media (min-width: 361px) and (max-width: 737px) {
    padding: 0;
    border: none;
  }

  @media ${responsive.mobile} {
    font-size: 0.625rem;
    border: none;
    padding: 0;
  }
`;

export default Footer;
