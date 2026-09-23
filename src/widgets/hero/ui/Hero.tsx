"use client";

import Actions from "./HeroActions";
import ScrollIndicator from "./HeroScrollIndicator";
import Video from "./HeroVideo";
import TechStack from "./Skills";
import HeroContent from "./HeroContent";
import Wrapper from "./HeroWrapper";
import MobileBackground from "./HeroMobileBackground";
import Container from "./HeroContainer";

const Hero = () => {
  return (
    <Wrapper>
      <Video />
      <MobileBackground />
      <Container>
        <HeroContent />
        <TechStack />
        <Actions />
        <ScrollIndicator />
      </Container>
    </Wrapper>
  );
};

export default Hero;
