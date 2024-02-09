import React from 'react'
import styled from 'styled-components'

const StyledFigureComponents = styled.figure`

figcaption {
  font-style: italic;
}
`

export default function StyledFigure({imageURL, date}) {
    return (
      <StyledFigureComponents>
        <img src={imageURL} />
        <figcaption>Awesome pic taken on {date}</figcaption> 
      </StyledFigureComponents> 
    )
  }