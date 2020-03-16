import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';

const { laurelGreen } = colors;
const Wrapper = styled.div`
  padding: 104px 24px 24px;
  background: url("https://s3.us-east-2.amazonaws.com/outofthetimbers.com/images/tree_bark.png") repeat;
`;

const PageBorder = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const TopBackground = styled.div`
  background-image: url("https://s3.us-east-2.amazonaws.com/outofthetimbers.com/images/wave-pattern.png");
`;

const PatternBackground = styled.div`
  display: flex;
  background-color: ${laurelGreen};
`;

const TitleSection = styled.div`
  h1 {
    text-align: center;
  }
  p {
    line-height: 1.25;
    margin: 2px 0;
  }
  height: 100%;
  width: 60%;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center; 
`;

const PhotoSection = styled.div`
  width: 40%;
  > img {
    width:100%;
    height: 100%;
    border-radius: 0 3px 3px 0;
  }
`;

const BioContainer = styled.article`
  position: relative;
  margin: -56px auto 0;
  background: #FFC857;
  max-width: 80%;
  color: #0A100D;
`;

const ColumnWrapper = styled.div`
  padding: 48px 24px;
  display: flex;

  & div:first-child {
    border-right:1px solid #0A100D;
  }
  @media(max-width: 762px) {
    flex-direction: column;
    & div:first-child {
      padding-bottom: 0;
      border-right: none;
    }

    & div:nth-child(2n) {
      padding-top: 0;
    }
  }
`;

const BioColumn = styled.div`
  width: 50%;
  padding: 24px;

  @media(max-width: 762px) {
    width: 100%;
    padding: 0;
  }
`;

const CollageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const CollageFirstRow = styled.div`
position: relative;
  > img:first-of-type {
    width: 60%;
  }
`;
const CollageSecondRow = styled.div`
  margin-top: -8rem;
  margin-left: -32rem;
  > img {
    width: 40%;
    margin-left: 60%;
  }
  
`;
const AboutPage = () => (
  <>
    <Wrapper>
      <PageBorder>
        <TopBackground>
          <PatternBackground>
            <TitleSection>
              <h1>My story</h1>
              <p>I was born in the small northern Missouri town of Jamesport, which is now a popular Amish community not far from my grandparents&apos; farm. It is from the timbers of that farm that I gather the Black Walnut, Red Oak, and Spalded Maple I shape into my wood creations.</p>
              <p>Additionally, I gather Yellow Beech and White Oak burls from the forests of the Upper Penninsula of Michigan.</p>
              <p>As a young boy my famliy moved to the Ponderosa Pines of Flagstaff, where, as an Eagle Scout I developed a love for the outdoors and an appreciation for nature and the splendor of the trees.</p>
              <p>While earning my Bachelor of Arts in Education at NAU, I minored in industrial arts, where I was introduced to the wood lath and became fasinated with its ability to unlock the beauty hidden within each piece of wood.</p>
              <p>After 38 years I retired as a public school teacher/administrator and now enjoy sharing with others the unique character and beauty of each piece of wood that comes &apos;<em>Out of the Timbers</em>&apos;.</p>
            </TitleSection>
            <PhotoSection>
              <img
                src="https://s3.us-east-2.amazonaws.com/outofthetimbers.com/images/aboutOOTT.jpg"
                alt="Out of the Timbers founder Bob Boothe"
              />
            </PhotoSection>
          </PatternBackground>
        </TopBackground>
      </PageBorder>
      <CollageContainer>
        <CollageFirstRow>
          <img
            src="https://s3.us-east-2.amazonaws.com/outofthetimbers.com/images/missouriLumber.jpg"
            alt="Jimmy Weldon with Lumber from Weldon Farm"
          />
        </CollageFirstRow>
        <CollageSecondRow>
          <img
            src="https://s3.us-east-2.amazonaws.com/outofthetimbers.com/images/missouriLumber.jpg"
            alt="Jimmy Weldon with Lumber from Weldon Farm"
          />
        </CollageSecondRow>
      </CollageContainer>
    </Wrapper>
  </>
);

export default AboutPage;
