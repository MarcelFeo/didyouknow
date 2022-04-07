import React from 'react'
import { Container, Image } from './styles'

export default function ImgCard({ anime_img, anime_name }) {

  return (
    <>
        <Container>
          <a href={`/anime/${anime_name}`}>
            <Image src={anime_img} alt={'imagem do anime'} />
          </a>
        </Container>
    </>
  )
}
