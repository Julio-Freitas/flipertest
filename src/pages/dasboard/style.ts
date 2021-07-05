import styled from 'styled-components';

export const ContainerCard = styled.div`
    filter: drop-shadow(0 0 0.1px ${({ theme }) => theme.colors.borderColor});
    max-width: 344px;
    margin: ${({ theme }) => theme.spacings.medium} auto;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #fff;
    padding: ${({ theme }) => theme.spacings.small};
    box-shadow: 2px 4px 4px 0 ${({ theme }) => theme.colors.borderColor};
`;

export const TextLoading = styled.div`
    font-size: ${({ theme }) => theme.font.sizes.large};
    padding: ${({ theme }) => theme.spacings.small};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    max-width: 100%;
`;
