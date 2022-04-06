import React from 'react'
import { Container, Image } from './styles'

export default function ImgCard({ anime_img }) {

  return (
    <>
        <Container>
            <Image src={anime_img} alt={'imagem do anime'} />
        </Container>
    </>
  )
}
