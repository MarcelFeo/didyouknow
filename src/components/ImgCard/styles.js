import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  width: 22rem;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2.5rem 0.5rem 0.5rem;
  animation: fadein 0.5s;

  &:hover {
    border: 0.2rem solid var(--text-color);
    border-radius: 1rem;
    cursor: pointer;
  }
`;

export const Image = styled.img`
    width: 250px;
    height: 350px;
`;
