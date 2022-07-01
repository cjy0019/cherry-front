import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../style/responsive';
import Hotsix from './Hotsix';
import { QueryClient, QueryClientProvider } from 'react-query';

export default {
  title: 'molecules/Hot6',
  component: Hotsix,
  parameters: {
    layout: 'fullscreen',
  },
};

export const PcHot6 = () => (
  <Container>
    <Hotsix></Hotsix>
  </Container>
);

PcHot6.storyName = 'PcHot6';

const Container = styled.div`
  width: 62.5vw;
  margin: 0 auto;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 89.1667vw;
  }
`;
