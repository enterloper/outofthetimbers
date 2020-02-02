import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 80px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactPage = () => (
  <Wrapper>
    <h1>Get in touch!</h1>
    <p>Apologies on the inconvenience, we are building a better means of communication.</p>
    <p>
      In the mean time, feel free to e-mail me at <a href="mailto:bobboothe111@msn.com">bobboothe111@msn.com</a>
    </p>
  </Wrapper>
);

export default ContactPage;
