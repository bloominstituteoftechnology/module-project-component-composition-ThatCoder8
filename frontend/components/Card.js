import React from 'react'
import styled from 'styled-components'
import StyledFigure from './Figure'

const StyledCardContainer = styled.div`
border: 1px solid black;
padding: 2rem;
border-radius: 12px;
padding: 2rem;

h2 {
  color: yellow;
  font-size: 2.5em;
  margin: 0 0 1rem 0;
}

p {
  margin: 0 0 1.5rem 0;

  &::first-line {
    font-size: 1.5em;
  }
}`

export default function StyledCard ({ title, text, imageURL, date }) {
  console.log("sara")
    return (
      <StyledCardContainer color="orange" className = 'card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={imageURL} alt="NASA APOD" />
      <StyledFigure
      imageURL={imageURL}
      caption={date}
      />
    </StyledCardContainer>
    )
  } 