import styled from 'styled-components';
import { ReactComponent as Sad } from '../../assests/svg/sad.svg';

export const ContainerCard = styled.div`
    filter: drop-shadow(0 0 0.1px ${({ theme }) => theme.colors.borderColor});
    max-width: 344px;
    margin: ${({ theme }) => theme.spacings.medium} auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #fff;
    padding: ${({ theme }) => theme.spacings.small};
    box-shadow: 2px 4px 4px 0 ${({ theme }) => theme.colors.borderColor};
    justify-content: center;

    h1 {
        font-size: ${({ theme }) => theme.font.sizes.large};
        padding: ${({ theme }) => theme.spacings.small};
        text-align: center;
        color: ${({ theme }) => theme.colors.primary};
    }
    p {
        font-size: ${({ theme }) => theme.font.sizes.small};
        color: ${({ theme }) => theme.colors.primary};
        padding: ${({ theme }) => theme.spacings.small};
        font-weight: bold;
    }
    button {
        max-width: 100%;
        width: 100%;
    }
`;

export const SadIcon = styled(Sad)`
    width: 100px;
    margin: 30px 0;

    path {
        fill: ${({ theme }) => theme.colors.primary};
    }
    circle {
        fill: ${({ theme }) => theme.colors.primary};
    }
`;
