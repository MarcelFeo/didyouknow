import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { apiGetAnime } from "../../services/api";

import { Container, Text, FactContainer } from './styles';

export default function Anime() {
  const { slug } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async (url) => {
      let anime = await apiGetAnime(url);
      setData(anime);
    }
    
    load(`https://anime-facts-rest-api.herokuapp.com/api/v1/${slug}`)
  }, [slug])

  console.log(data);

  return (
    <Container>
      {data.map((item) => (
        <FactContainer>
          <Text>{item.fact_id}) {item.fact}</Text>
        </FactContainer>
      ))}
    </Container>
  )
}
