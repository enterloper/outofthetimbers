import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import Button from 'components/Button';

const { smokeyBlack } = colors;
const StyledSummary = styled.section`
  padding: 72px 0 36px;
  width: 100%;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  h3, h4 {
    color: ${smokeyBlack};
  }
`;

const SummaryTitle = styled.h3`
  font-size:  40px;
  text-align: center;
  margin-bottom: 24px;
`;

const SummaryDescription = styled.h4`
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
`;
const Summary = () => (
  <StyledSummary>
    <SummaryContainer>
      <SummaryTitle>
        Out of the Timbers creates one of a kind hand crafted works
      </SummaryTitle>
      <SummaryDescription>
        The care and attention to detail put into each produced peice, is a result of the respect for the individual and unique nature each tree provides.
      </SummaryDescription>
      <Button color={smokeyBlack} onClick={() => {}}>
        LEARN MORE
      </Button>
    </SummaryContainer>
  </StyledSummary>
);

export default Summary;
