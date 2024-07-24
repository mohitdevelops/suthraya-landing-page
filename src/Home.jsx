import React from "react";
import styled from "styled-components";
import {
  MdLanguage,
  MdComputer,
  MdNetworkWifi,
  MdWork,
  MdStarRate,
} from "react-icons/md"; // Example icons for features

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-grey-0);
`;

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
  }
`;

const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
  padding: 2rem 4rem;
  gap: 1.2rem;
`;

const ContentContainer = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
`;

const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const FeatureListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  text-align: left;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    justify-content: left;
  }
`;

const StyledButton = styled.button`
  background-color: var(--color-grey-200);
  border: none;
  padding: 1rem 1.4rem;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  color: black;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

function Home() {
  return (
    <HomeLayout>
      <StyledHeader>
        {/* Placeholder for future logo or other elements */}
      </StyledHeader>
      <HomeContainer>
        <h1>Welcome to SUTHRAYA</h1>
        <h2>Empowering Your Learning Journey</h2>
        <ContentContainer>
          <h3>Why Join Suthraya?</h3>
          <FeatureList>
            <FeatureListItem>
              <MdLanguage size="24" />
              Learn and Practice Languages
            </FeatureListItem>
            <FeatureListItem>
              <MdComputer size="24" />
              Learn and Enhance Valuable Skills
            </FeatureListItem>
            <FeatureListItem>
              <MdNetworkWifi size="24" />
              Expand Your Professional Network
            </FeatureListItem>
            <FeatureListItem>
              <MdWork size="24" />
              Explore Freelance Opportunities
            </FeatureListItem>
            <FeatureListItem>
              <MdStarRate size="24" />
              Meet Potential Partners through a Rating System
            </FeatureListItem>
          </FeatureList>
        </ContentContainer>
        <h5>
          Join us today and become a part of a community focused on making a
          difference!
        </h5>
        <ActionButtons>
          <StyledButton>Login</StyledButton>
          <StyledButton>Sign Up</StyledButton>
        </ActionButtons>
      </HomeContainer>
    </HomeLayout>
  );
}

export default Home;
