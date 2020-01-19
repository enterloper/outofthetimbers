import React from 'react';
import styled from 'styled-components';
import NavigationMenu from 'components/NavigationMenu';

const Wrapper = styled.div`
  padding: 24px;
  background-color: #EFF8E2;
`;

const PageBorder = styled.div`
  border: 16px solid #0A100D;
  @media(max-width: 762px) {
    border: none;
  }
`;

const TopBackground = styled.div`
  display: flex;
  background: #A4B494;
  @media(max-width: 762) {
    border-radius: 3px;
  }
`;

const TitleSection = styled.div`
  height: 100%;
  width: 50%;
  background: blue;
`;

const PhotoSection = styled.div`
  width:50%;
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
`;

const CollageFirstRow = styled.div`
  > img {
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
    <NavigationMenu />
    <Wrapper>
      <PageBorder>
        <TopBackground>
          <TitleSection />
          <PhotoSection>
            <img
              src="assets/images/aboutOOTT.jpg"
              alt="Out of the Timbers founder Bob Boothe"
            />
          </PhotoSection>
        </TopBackground>
        <BioContainer>
          <ColumnWrapper>
            <BioColumn>
              <p>I was born in the small northern Missouri town of Jamesport, which is now a popular Amish community not far from my grandparents&apos; farm. It is from the timbers of that farm that I gather the Black Walnut, Red Oak, and Spalded Maple I shape into my wood creations.</p>
              <p>Additionally, I gather Yellow Beech and White Oak burls from the forests of the Upper Penninsula of Michigan.</p>
              <p>As a young boy my famliy moved to the Ponderosa Pines of Flagstaff, where, as an Eagle Scout I developed a love for the outdoors and an appreciation for nature and the splendor of the trees.</p>
            </BioColumn>
            <BioColumn>
              <p>While earning my Bachelor of Arts in Education at NAU, I minored in industrial arts, where I was introduced to the wood lath and became fasinated with its ability to unlock the beauty hidden within each piece of wood.</p>
              <p>After 38 years I retired as a public school teacher/administrator and now enjoy sharing with others the unique character and beauty of each piece of wood that comes </p>
              <p>&apos;Out of the Timbers&apos;</p>
            </BioColumn>
          </ColumnWrapper>
        </BioContainer>
        <CollageContainer>
          <CollageFirstRow>
            <img
              src="assets/images/missouriLumber.jpg" 
              alt="Jimmy Weldon with Lumber from Weldon Farm"
            />
          </CollageFirstRow>
          <CollageSecondRow>
            <img
              src="assets/images/missouriLumber.jpg" 
              alt="Jimmy Weldon with Lumber from Weldon Farm"
            />
          </CollageSecondRow>
        </CollageContainer>
      </PageBorder>
    </Wrapper>
  </>
);

export default AboutPage;
