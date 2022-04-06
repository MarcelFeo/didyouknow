import React, { useEffect, useState } from 'react';
// services
import apiGetAll from '../../services/api';
// styles
import { Container, ImgContainer } from './styles';
// components
import Header from '../Header';
import ImgCard from '../ImgCard';


// url da api
const BASE_URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async (url) => {
      let animeList = await apiGetAll(url);
      setData(animeList);
    }

    load(BASE_URL);
  }, []);

  return (
    <>
        <Container>
          <Header />
        </Container>
        <ImgContainer>
            {data.map((item) => (
              <ImgCard 
                key={item.anime_id} 
                anime_img={item.anime_img}
                data={data}
              />
            ))}
        </ImgContainer>
    </>
  )
}
