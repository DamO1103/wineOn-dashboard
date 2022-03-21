import React from 'react'
import { MainSection, PageContainer, ErrorPageContainer, Title } from '../../styles/globalStyles'

export default function Custom404() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <ErrorPageContainer>
          <Title className="notFound">
            Oops!.. <br /> Something went wrong (404)
          </Title>
          <img src="/img/not-found.gif" alt="Not found" />
        </ErrorPageContainer>
      </PageContainer>
    </MainSection>
  )
}
