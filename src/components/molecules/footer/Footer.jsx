import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../../style/palette';
import { responsive } from '../../../style/responsive';

const Footer = () => {
  const [viewPort, setViewPort] = useState(window.innerWidth);

  const resizeViewPort = useCallback(
    (e) => {
      setViewPort(window.innerWidth);
      e.stopPropagation();
    },
    [viewPort],
  );

  useEffect(() => {
    window.addEventListener('resize', resizeViewPort);

    return () => window.removeEventListener('resize', resizeViewPort);
  }, [viewPort]);

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
          {viewPort <= 400 && <Line />}
          <StyledP>github</StyledP>
          <EmailBadge>github.com/cherrypick-project</EmailBadge>
        </FlexWrapper>
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
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 1100px;
  box-sizing: border-box;
  padding-left: 13px;

  @media ${responsive.tablet} {
    width: 100%;
    padding-right: 3px;
  }

  @media ${responsive.mobile} {
    flex-direction: column-reverse;
    gap: 0;
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
  white-space: nowrap;

  @media ${responsive.mobile} {
    font-size: 12px;
  }
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
  padding-top: 2px;

  @media ${responsive.mobile} {
    width: 40px;
    height: 18px;
    margin-left: 4px;
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
  margin-right: 8px;

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
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  white-space: nowrap;

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
  margin: 0 6px;
`;
export default React.memo(Footer);
