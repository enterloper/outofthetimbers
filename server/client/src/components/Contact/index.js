import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import Button from 'components/Button';
const { mustard } = colors;

const ContactContainer = styled.section`
  background: #313e48 url('assets/images/forest-reflection.jpg') no-repeat top;
  background-size: cover;
  color: white;
  width: 100%;
`;

const ContactOverlay = styled.div`
  padding: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .7); 
`;

const ContactContent = styled.div`
  font-size: 32px;
  max-width: 60%;
  text-align: center;
  margin-bottom: 32px;

`;

const Established = styled.div`
  background-color: transparent;
  color: ${mustard};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid ${mustard};
  margin-bottom: 32px;
  p:first-of-type {
    padding: 0 8px 4px;
    border-bottom: 1px solid ${mustard};
  }
  p: last-of-type {
    padding: 4px 8px 0;
  }
`;

const Contact = () => (
  <ContactContainer>
    <ContactOverlay>
      <Established>
        <p>EST.</p>
        <p>2017</p>
      </Established>
      <ContactContent>
        <p>HERE IS SOMETHING COOL THAT MY DAD WILL TELL ME TO PUT.</p>
      </ContactContent>
      <Button>
        GET IN TOUCH
      </Button>
    </ContactOverlay>
  </ContactContainer>
);

export default Contact;
