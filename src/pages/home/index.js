import React from 'react'
import { MainSection, PageContainer, Subtitle } from '../../styles/globalStyles'

export default function Home() {
  return (
    <MainSection className="MainSection">
      <Subtitle>hola</Subtitle>
      <PageContainer className="PageContainer">
      <img src="/img/not-found.gif" alt="Not found" />
      </PageContainer>
    </MainSection>
  )
}
