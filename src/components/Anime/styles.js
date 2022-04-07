import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    padding: 2rem;
`;

export const FactContainer = styled.div`
    margin-bottom: 2rem;
    background-color: var(--text-body);

    padding: 1rem;
    border-radius: 10px;

    &:hover {
        background-color: var(--hover);
        cursor: pointer;
    }
`;

export const Text = styled.p`
    color: white;
`;
