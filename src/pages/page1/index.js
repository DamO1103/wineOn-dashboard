import React from 'react'
import { MainSection, PageContainer, Subtitle } from '../../styles/globalStyles'

export default function Page1() {
  return (
    <MainSection className="MainSection">
      <Subtitle>Subtitle</Subtitle>
      <PageContainer className="PageContainer">
        <h1>Page 1</h1>
      </PageContainer>
    </MainSection>
  )
}
