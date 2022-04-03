import React, { useEffect } from 'react';
import apiGet from '../../services/api';
import { Container, Content, Text } from './styles';

export default function Header() {

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <Container>
        <Content>
            <Text>Did you know?</Text>
        </Content>
    </Container>
  )
}
