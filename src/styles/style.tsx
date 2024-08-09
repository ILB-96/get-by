"use client";
import { styled, css } from "styled-components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const MainGridStyle = css`
  --gap: clamp(1rem, 6vw, 3rem);
  display: grid;
  grid-template-columns:
    minmax(var(--gap), 1fr)
    repeat(12, minmax(0, 1fr))
    minmax(var(--gap), 1fr);
`;

const MainStyle = css`
  display: grid;
  grid-template-columns: subgrid;
  grid-column-start: 1;
  grid-column-end: -1;
`;

const ContentStyle = css`
  display: grid;
  grid-template-columns: subgrid;
  grid-column-start: 2;
  grid-column-end: -2;
`;

const SmallShadowStyle = css`
  align-items: flex-start;
  box-shadow: 0 0 1px 0 var(--shadow);
  flex: 0 auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
`;
const ShadowStyle = css`
  align-items: flex-start;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.11),
    0 0 1px #727272;
  flex: 0 auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
`;

export const BodyContainer = styled.body`
  ${MainGridStyle}
  background-color: var(--background);
  color: var(--onbackground);
  position: relative;
`;

export const MainContainer = styled.main`
  ${MainStyle}
  min-height: 85vh;
  padding-top: var(--xl);
  place-content: start;
`;

export const SectionContainer = styled.section`
  ${ContentStyle}
  padding: var(--lg) 0;
  > * {
    grid-column-start: 1;
    grid-column-end: -1;
  }
`;

export const NavContainer = styled.nav`
  ${MainStyle}
  ${SmallShadowStyle}
  position: sticky;
  background-color: var(--surfacebright);
  padding: var(--md) 0;
  top: 0;
  z-index: 50;

  > button {
    grid-column-end: -2;
    grid-column: span 1;
    width: fit-content;
    margin-left: auto;
  }
`;
export const LogoLink = styled(Link)`
  margin: auto;
  width: fit-content;
`;
export const NavContent = styled.div`
  ${ContentStyle}
  grid-column-end: -3;
  :nth-child(2) {
    grid-column-start: 3;
  }
  > * {
    width: fit-content;
    margin-right: auto;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: relative;
  gap: var(--sm);
  background-color: var(--surface);
  padding: var(--lg);
  border-radius: var(--md);
`;
export const TextContainer = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  align-items: start;

  :not(:first-child) {
    margin-top: var(--sm);
  }
`;

export const PrimaryButton = styled(Button)`
  font-size: 1.25rem;
  width: fit-content;
  display: flex;
  background-color: var(--primary);
  color: var(--onprimary);
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
  grid-column-start: 7;

  &:hover {
    background-color: var(--primary-inverse);
    color: var(--onprimaryfixed);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: start;
  font-weight: bold;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--primary);
  text-align: center;
  font-weight: 500;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: var(--onsurface);
  text-align: start;
  margin: 1rem 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary);
  text-align: center;
  margin: 1rem 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--lg);
  margin-top: var(--lg);
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureContainer = styled.div`
  padding: var(--lg) 0;
  background-color: var(--surfacebright);
  border-radius: var(--sm);
  display: flex;
  place-items: center;
  justify-content: space-evenly;

  > img {
    opacity: 85%;
    border-radius: 999px;
  }
`;

export const FooterContainer = styled.footer`
  ${MainStyle}
  ${SmallShadowStyle}
  background-color: var(--surface);
  display: flex;
  justify-content: space-around;
  padding: var(--md) 0;
  z-index: 40;
`;
