import React from 'react'
import { styled } from 'styled-components'

type ImageComponentPropsType = {
  src: string
  alt: string
}

const ImgPic = styled.img`
width: 280px;
height: 170px;
margin: 10px 10px 0 10px;
border-radius: 10px ;

`

export function ImageComponent(props: ImageComponentPropsType) {
  return (
    <div>
      <ImgPic src={props.src} alt={props.alt}></ImgPic>
      </div>
  )
}