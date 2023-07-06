import React, { FC } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Head from "next/head";
import ProfileImage from "../components/ProfileImage";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: lighter;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: lighter;
`;

const Flags = styled.p``;

const Name = styled.span`
  font-weight: normal;
`;

const Company = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: normal;
`;

const Index: FC = () => (
  <>
    <Head>
      <title>Rafaela Silva - Software Engineer</title>
      <meta
        name="description"
        content="Software engineering enthusiast with a background in finance."
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://twitter.com/Rafa_ela3" />
      <meta name="twitter:title" content="Rafaela Silva - Software Engineer" />
      <meta
        name="twitter:description"
        content="Software engineering enthusiast with a background in finance."
      />
    </Head>
    <Layout>
      <Container>
        <ProfileImage />
        <Title>
          Hey 👋, my name is <Name>Rafaela</Name>
        </Title>
        <br />
        <SubTitle>
          I'm a Software Engineer at{" "}
          <Company
            href="https://www.goodlord.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goodlord
          </Company>
        </SubTitle>
        <br />
        <Flags>🇧🇷 🇬🇧</Flags>
        <Navigation />
      </Container>
    </Layout>
  </>
);

export default Index;
