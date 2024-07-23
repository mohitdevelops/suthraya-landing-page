import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 50px 0;
  margin-bottom: 20px;
`;

const FeaturesSection = styled.section`
  margin: 20px 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin: 20px 0;
  text-align: left;
`;

const FeatureImage = styled.img`
  width: 50px;
  height: 50px;
`;

const AuthButtons = styled.section`
  margin: 20px 0;
`;

const Button = styled(Link)`
  margin: 0 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-top: 20px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterItem = styled.li`
  display: inline;
  margin: 0 10px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <h1>Welcome to Suthraya</h1>
        <p>Your comprehensive networking and learning platform</p>
        <Button primary>Get Started</Button>
      </Header>

      <FeaturesSection>
        <h2>Features</h2>
        <FeatureList>
          <FeatureItem>
            <FeatureImage
              src="path/to/icon.png"
              alt="Professional Networking"
            />
            <h3>Professional Networking</h3>
            <p>Connect with professionals in your industry.</p>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage src="path/to/icon.png" alt="Educational Content" />
            <h3>Educational Content</h3>
            <p>Access a wide range of educational resources.</p>
          </FeatureItem>
          <FeatureItem>
            <FeatureImage
              src="path/to/icon.png"
              alt="Social Media Interaction"
            />
            <h3>Social Media Interaction</h3>
            <p>Engage with content and share your thoughts.</p>
          </FeatureItem>
        </FeatureList>
      </FeaturesSection>

      <AuthButtons>
        <p>Join our community to unlock all features.</p>
        <Button to="/signup" primary>
          Sign Up
        </Button>
        <Button to="/login">Log In</Button>
      </AuthButtons>

      <Footer>
        <p>&copy; 2024 Suthraya. All rights reserved.</p>
        <FooterList>
          <FooterItem>
            <Link to="/privacy">Privacy Policy</Link>
          </FooterItem>
          <FooterItem>
            <Link to="/terms">Terms of Service</Link>
          </FooterItem>
          <FooterItem>
            <Link to="/contact">Contact Us</Link>
          </FooterItem>
        </FooterList>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
