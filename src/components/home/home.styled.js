import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: ${({ theme }) => theme.desktop}) {
    div {
        width: 1200px;
        height: 200px;
    }
}
`