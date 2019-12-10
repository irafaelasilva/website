import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`

const Title = styled.h1`
  font-weight: lighter;
`

const SubTitle = styled.h4`
  font-weight: lighter;
`

const Name = styled.span`
  font-weight: normal;
`

const Company = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: normal;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Hey 🙋, my name is <Name>Rafaela Silva</Name>
        </Title>
        <br />
        <SubTitle>
          I'm a Junior Software Enginner and just finished{" "}
          <Company
            href="https://makers.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Makers Academy
          </Company>
        </SubTitle>
        <br />
        <SubTitle>🇧🇷🇬🇧</SubTitle>
      </Container>
    </Layout>
  )
}

export default IndexPage
