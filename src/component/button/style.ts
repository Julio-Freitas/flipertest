import styled from 'styled-components';

export const Button = styled.button`
    width: 130px;
    height: 32px;
    border-radius: 50px;
    background-color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    align-self: flex-end;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transition: ease-in-out 0.5s;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-radius: 50px 0 0 50px;
        background: transparent;
        background-size: 50% auto;
        transition: ease-in-out 0.5s;
    }
    &::before {
        content: '';
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        border-radius: 0 50px 50px 0px;
        background: transparent;
        background-size: 50% auto;
        transition: ease-in-out 0.5s;
    }

    &:hover::after {
        content: attr(data-after);
        width: 50%;
        color: #fff;
        white-space: break-spaces;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:hover::before {
        content: attr(data-before);
        color: #fff;
        padding-left: 3px;
        width: 50%;
        white-space: break-spaces;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;
