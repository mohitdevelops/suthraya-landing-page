import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MdLanguage,
  MdComputer,
  MdNetworkWifi,
  MdWork,
  MdStarRate,
} from "react-icons/md"; // Example icons for features
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import DarkModeToggle from "../ui/DarkModeToggle";

// General layout styling, using flexbox for alignment and spacing.
const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-grey-0);
`;

// Header styling, with space for future navigation links and the dark mode toggle.
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem; // Adjust padding for smaller screens
  }
`;

// Main container for the content, centered and styled for visual appeal.
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

// Container for the features section, including a background color and padding for emphasis.
const ContentContainer = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
`;

// Styling for the list of features, with added icons for visual interest.
const FeatureList = styled.ul`
  list-style: none; // Remove default list styling
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

// Individual list items with icons, providing a brief description of platform features.
const FeatureListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px; // Space between icon and text
  margin-bottom: 10px;
  font-size: 1.2rem; // Adjust text size for readability
  text-align: left; // Align text to the left
  width: 100%; // Ensure full width to align icons and text properly

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    justify-content: left; // Align items to the left on smaller screens
  }
`;

// Call to action buttons styled for emphasis and interaction.
const StyledButton = styled(Link)`
  background-color: var(--color-grey-200);
  border: none;
  padding: 1rem 1.4rem;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  color: black; // Ensure text color contrasts with button background
  text-decoration: none; // Remove default link styling
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

// Wrapper for the action buttons, ensuring proper alignment and spacing.
const ActionButtons = styled.div`
  display: flex;
  gap: 10px; // Space between buttons
  justify-content: center; // Center buttons within the container
  margin-top: 20px; // Space above the buttons
`;

// The Home component structure, enhanced for visual appeal and responsiveness.
function Home() {
  return (
    <HomeLayout>
      <StyledHeader>
        <DarkModeToggle />
      </StyledHeader>
      <HomeContainer>
        <Logo />
        <Heading as="h1">Welcome to SUTHRAYA</Heading>
        <Heading as="h2">Empowering Your Learning Journey</Heading>
        <ContentContainer>
          <Heading as="h3">Why Join Suthraya?</Heading>
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
        <Heading as="h5">
          Join us today and become a part of a community focused on making a
          difference!
        </Heading>
        <ActionButtons>
          <StyledButton to="/login">Login</StyledButton>
          <StyledButton to="/signup">Sign Up</StyledButton>
        </ActionButtons>
      </HomeContainer>
    </HomeLayout>
  );
}

export default Home;
