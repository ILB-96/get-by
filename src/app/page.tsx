import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BenefitsContainer,
  FeatureContainer,
  SectionSubtitle,
  HeroContainer,
  HeroTitle,
  MainContainer,
  Paragraph,
  PrimaryButton,
  SectionContainer,
  SectionTitle,
  TextContainer,
} from "@/styles/style";

export default function Home() {
  return (
    <MainContainer>
      <SectionContainer role="contentinfo" id="hero">
        <HeroContainer>
          <TextContainer>
            <HeroTitle>
              Join Forces to<span>Save More</span>
            </HeroTitle>
            <Paragraph>
              GetBy helps you connect with others who have similar{" "}
              <span>
                purchasing interests to get the best deals and share delivery
                costs.
              </span>
            </Paragraph>
            <PrimaryButton>Get Started</PrimaryButton>
          </TextContainer>
          <Image
            src="/hero.png"
            alt="Group shopping illustration"
            width={700}
            height={405}
          />
        </HeroContainer>
      </SectionContainer>

      <SectionContainer id="features">
        <SectionTitle>How It Works</SectionTitle>
        <FeatureContainer>
          <TextContainer>
            <SectionSubtitle>Find Your Group</SectionSubtitle>
            <Paragraph>
              Connect with people who have similar purchasing interests.
            </Paragraph>
          </TextContainer>
          <Image
            src="/feature1.png"
            alt="Feature 1 Image"
            width={300}
            height={150}
          />
        </FeatureContainer>
        <FeatureContainer>
          <TextContainer>
            <SectionSubtitle>Group Purchase</SectionSubtitle>
            <Paragraph>
              Combine your orders to get better deals and lower prices.
            </Paragraph>
          </TextContainer>
          <Image
            src="/feature2.png"
            alt="Feature 2 Image"
            width={300}
            height={150}
          />
        </FeatureContainer>
        <FeatureContainer>
          <TextContainer>
            <SectionSubtitle>Share Delivery</SectionSubtitle>
            <Paragraph>
              Split delivery costs and save more on shipping.
            </Paragraph>
          </TextContainer>
          <Image
            src="/feature3.webp"
            alt="Feature 3 Image"
            width={300}
            height={150}
          />
        </FeatureContainer>
      </SectionContainer>

      <SectionContainer id="benefits">
        <SectionTitle>Why Choose GetBuy?</SectionTitle>
        <BenefitsContainer>
          <TextContainer>
            <SectionSubtitle>Save Money</SectionSubtitle>
            <Paragraph>Get better deals by purchasing in groups.</Paragraph>
          </TextContainer>
          <TextContainer>
            <SectionSubtitle>Convenient</SectionSubtitle>
            <Paragraph>
              Easily find and connect with like-minded buyers.
            </Paragraph>
          </TextContainer>
          <TextContainer>
            <SectionSubtitle>Eco-Friendly</SectionSubtitle>
            <Paragraph>
              Reduce carbon footprint by sharing delivery trips.
            </Paragraph>
          </TextContainer>
        </BenefitsContainer>
      </SectionContainer>

      <PrimaryButton>Ready to Save More?</PrimaryButton>
      <SectionContainer id="cta" />
    </MainContainer>
  );
}
